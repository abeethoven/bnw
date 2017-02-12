import { XysailingPage } from './app.po';

describe('xysailing App', function() {
  let page: XysailingPage;

  beforeEach(() => {
    page = new XysailingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('xysailing works!');
  });
});
