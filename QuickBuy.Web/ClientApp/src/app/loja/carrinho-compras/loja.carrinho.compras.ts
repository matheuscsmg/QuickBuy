import { Produto } from "../../modelo/produto";

export class LojaCarrinhoCompras {
  public produtos: Produto[] = [];

  public adicionar(produto: Produto) {
    var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
    if (!produtoLocaStorage) {
      //se não existir nada dentro do locaStorage
      this.produtos.push(produto);
    } else {
      //se ja existir pelo menos um item armazenado na sessao(locasLocalStorage)
      this.produtos = JSON.parse(produtoLocaStorage);
      this.produtos.push(produto);
    }

    localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
  }

  public obterProdutos(): Produto[] {
    var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
    if (produtoLocaStorage)
      return JSON.parse(produtoLocaStorage);     
  }

  public removerProdutos(produto: Produto){

  }
}

