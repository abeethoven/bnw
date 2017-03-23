import { browser, element, by } from 'protractor';

export class bnwPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bnw-root h1')).getText();
  }
}
