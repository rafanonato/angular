import { NovoaplicacaoPage } from './app.po';

describe('novoaplicacao App', function() {
  let page: NovoaplicacaoPage;

  beforeEach(() => {
    page = new NovoaplicacaoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
