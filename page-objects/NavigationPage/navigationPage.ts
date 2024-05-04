import { HelperBase } from "../../page-base/helperBase";
import { Env } from "../../utils/environment";
import { Page } from "../../utils/playwrightExports";
export class NavigationPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }
  async visit() {
    await this.page.goto(Env.test);
  }
}
