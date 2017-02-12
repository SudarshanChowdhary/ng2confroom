import { LookuproomPage } from './app.po';

describe('lookuproom App', function() {
  let page: LookuproomPage;

  beforeEach(() => {
    page = new LookuproomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
