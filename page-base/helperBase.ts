import { Page } from "../utils/playwrightExports";

export class HelperBase {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
