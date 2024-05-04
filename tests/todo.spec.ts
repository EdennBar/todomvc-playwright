import { test, expect } from "../fixtures/baseTest";
import { Page } from "../utils/playwrightExports";
import TODO_ITEMS from "../test-data/test-data";

test.beforeEach(async ({ navigationPage }) => {
  await navigationPage.visit();
});

test.describe("Todo Suite", () => {
  let page: Page;
  test("Verify that items were added to the todo list", async ({
    todoPage,
  }) => {
    await todoPage.addItemsToTodoList();

    const todoCountTextContent =
      await todoPage.getTodoCountTextAfterAddingItems();
    expect(todoCountTextContent).toBe(
      `${todoPage.getTodoItemCount()} items left!`
    );
    expect(await todoPage.getTodoListTextContents()).toEqual(TODO_ITEMS);
  });

  test("Verify that the main and footer sections are displayed", async ({
    page,
    todoPage,
  }) => {
    await todoPage.addItemToToList(TODO_ITEMS[0]);
    await expect(todoPage.footer).toBeVisible();
    await expect(todoPage.main).toBeVisible();
  });

  test("Verify that all items can be marked as completed", async ({
    page,
    todoPage,
  }) => {
    await todoPage.addItemToToList(TODO_ITEMS[0]);
    await todoPage.toggleAll.check();
    await expect(todoPage.todoItem).toHaveClass("completed");
  });

  test("Verify that the text input field is cleared after adding an item", async ({
    todoPage,
  }) => {
    await todoPage.addItemToToList(TODO_ITEMS[0]);
    await expect(todoPage.newTodoInput).toBeEmpty();
  });

  test("Verify that checking the toggle marks an item as completed ", async ({
    page,
    todoPage,
  }) => {
    await todoPage.addItemToToList(TODO_ITEMS[0]);
    await todoPage.toggle.check();
    await expect(todoPage.todoItem).toHaveClass("completed");
    await page.waitForTimeout(4000);
  });
});
