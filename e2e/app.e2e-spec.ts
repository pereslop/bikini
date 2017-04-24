import { BikiniPage } from './app.po';

describe('bikini App', () => {
  let page: BikiniPage;

  beforeEach(() => {
    page = new BikiniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
