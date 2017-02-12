import { browser, element, by } from 'protractor';

export class XysailingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('xysailing-root h1')).getText();
  }
}
