import { test as base } from "@playwright/test";
import { NavigationPage } from "../page-objects/NavigationPage/navigationPage";
import { TodoPage } from "../page-objects/TodoPage/todoPage";
interface PageObjectInterfaces {
  navigationPage: NavigationPage;
  todoPage: TodoPage;
}
export const test = base.extend<PageObjectInterfaces>({
  navigationPage: async ({ page }, use) => {
    await use(new NavigationPage(page));
  },
  todoPage: async ({ page }, use) => {
    await use(new TodoPage(page));
  },
});

export { expect } from "@playwright/test";
