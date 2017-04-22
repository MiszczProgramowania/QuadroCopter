import { QuadroCopterPage } from './app.po';

describe('quadro-copter App', () => {
  let page: QuadroCopterPage;

  beforeEach(() => {
    page = new QuadroCopterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
