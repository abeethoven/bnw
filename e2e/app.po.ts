import { browser, element, by } from 'protractor';

export class NgSeedPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-seed-root h1')).getText();
  }
}
