import { HelperBase } from "../../page-base/helperBase";
import { Page, Locator } from "../../utils/playwrightExports";
import { locators } from "./todoLocators";
import TODO_ITEMS from "../../test-data/test-data";

export class TodoPage extends HelperBase {
  readonly newTodoInput: Locator;
  readonly todoList: Locator;
  readonly footer: Locator;
  readonly main: Locator;
  readonly toggleAll: Locator;
  readonly todoItem: Locator;
  readonly toggle: Locator;
  counter: number;
  todoCountTextContent: Locator;

  constructor(page: Page) {
    super(page);
    this.newTodoInput = page.getByPlaceholder(locators.newTodoInput);
    this.todoList = page.locator(locators.todoList);
    this.counter = 0;
    this.todoCountTextContent = page.locator(locators.todoCountTextContent);
    this.footer = page.locator(locators.footer);
    this.main = page.locator(locators.main);
    this.toggleAll = page.locator(locators.toggleAll);
    this.todoItem = page.locator(locators.todoItem);
    this.toggle = page.locator(locators.toggle);
  }
  getTodoItemCount(): number {
    return this.counter;
  }

  updateTodoItemCount(newCount: number): void {
    this.counter = newCount;
  }

  async addItemToToList(todo: string): Promise<void> {
    await this.newTodoInput.fill(todo);
    await this.newTodoInput.press("Enter");
  }

  async addItemsToTodoList(): Promise<void> {
    for (const todo of TODO_ITEMS) {
      await this.addItemToToList(todo);
      await this.updateTodoItemCount(this.getTodoItemCount() + 1);
    }
  }

  async getTodoCountTextAfterAddingItems(): Promise<string> {
    const todoCountTxt = await this.todoCountTextContent.textContent();
    return todoCountTxt !== null ? todoCountTxt : "";
  }

  async getTodoListTextContents(): Promise<any> {
    return await this.todoList.allTextContents();
  }
}
