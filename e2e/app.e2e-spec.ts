import { LivestreamWebPage } from './app.po';

describe('livestream-web App', () => {
  let page: LivestreamWebPage;

  beforeEach(() => {
    page = new LivestreamWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
