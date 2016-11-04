import { EjemploAngular2Page } from './app.po';

describe('ejemplo-angular2 App', function() {
  let page: EjemploAngular2Page;

  beforeEach(() => {
    page = new EjemploAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
