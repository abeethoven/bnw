import { bnwPage } from './app.po';

describe('bnw App', function() {
  let page: bnwPage;

  beforeEach(() => {
    page = new bnwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bnw works!');
  });
});
