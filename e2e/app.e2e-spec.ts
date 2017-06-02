import { FirstCoolAppPage } from './app.po';

describe('first-cool-app App', () => {
  let page: FirstCoolAppPage;

  beforeEach(() => {
    page = new FirstCoolAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
