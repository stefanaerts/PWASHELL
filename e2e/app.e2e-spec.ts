import { PWASHELLPage } from './app.po';

describe('pwashell App', () => {
  let page: PWASHELLPage;

  beforeEach(() => {
    page = new PWASHELLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
