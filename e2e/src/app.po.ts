import { browser, by, element, ElementFinder, Locator } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getRoot(): ElementFinder {
    return element(by.css('bd-root'));
  }

  getAppTitle(): Promise<string> {
    return element(by.css('bd-header span:first-child')).getText() as Promise<string>;
  }

  getOrganizationSelect(): ElementFinder {
    return element(by.css('bd-header mat-select'));
  }

  getBuildList(): ElementFinder {
    return element(by.css('.build-list-wrapper'));
  }

  getAppList(): ElementFinder {
    return element(by.css('.app-list-wrapper'));
  }

  getBuildListSpinner(): ElementFinder {
    return element(by.css('.build-list-wrapper bd-spinner'));
  }

  getAppListSpinner(): ElementFinder {
    return element(by.css('.app-list-wrapper bd-spinner'));
  }

  getBuildIcons(): ElementFinder {
    return element(by.css('.build-list-wrapper .bd-build .mat-icon'));
  }

  getBuildAppTitles(): ElementFinder {
    return element(by.css('.build-list-wrapper .bd-build .app-title'));
  }

  getBuildBuildNumbers(): ElementFinder {
    return element(by.css('.build-list-wrapper .bd-build .build-number'));
  }

  getBuildOwners(): ElementFinder {
    return element(by.css('.build-list-wrapper .bd-build .owner'));
  }

  getTriggerDates(): ElementFinder {
    return element(by.css('.build-list-wrapper .bd-build .triggered'));
  }

  getAppAppTitles(): ElementFinder {
    return element(by.css('.app-list-wrapper .bd-user-app .app-title'));
  }

  getAppOwners(): ElementFinder {
    return element(by.css('.app-list-wrapper .bd-user-app .owner'));
  }
}
