import { AppPage } from './app.po';
import { browser, logging, by, ExpectedConditions } from 'protractor';

describe('Bitrise Dashboard', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display', () => {
    expect(page.getRoot().isPresent()).toBeTruthy();
  });

  it('should display app title', () => {
    expect(page.getAppTitle()).toEqual('Bitrise Dashboard');
  });

  it('should display organization selector', () => {
    expect(page.getOrganizationSelect().isPresent()).toBeTruthy();
  });

  it('should display build list', () => {
    expect(page.getBuildList().isPresent()).toBeTruthy();
  });

  it('should display app list', () => {
    expect(page.getAppList().isPresent()).toBeTruthy();
  });

  it('should display icon for builds', () => {
    expect(page.getBuildIcons().isPresent()).toBeTruthy();
  });

  it('should display app title for builds', () => {
    expect(page.getBuildAppTitles().isPresent()).toBeTruthy();
  });

  it('should display build number for builds', () => {
    expect(page.getBuildBuildNumbers().isPresent()).toBeTruthy();
  });

  it('should display owner for builds', () => {
    expect(page.getBuildOwners().isPresent()).toBeTruthy();
  });

  it('should display trigger date of builds', () => {
    expect(page.getTriggerDates().isPresent()).toBeTruthy();
  });

  it('should display name for apps', () => {
    expect(page.getAppAppTitles().isPresent()).toBeTruthy();
  });

  it('should display owner for apps', () => {
    expect(page.getAppOwners().isPresent()).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
