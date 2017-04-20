import { IkBlogPage } from './app.po';

describe('ik-blog App', function() {
  let page: IkBlogPage;

  beforeEach(() => {
    page = new IkBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
