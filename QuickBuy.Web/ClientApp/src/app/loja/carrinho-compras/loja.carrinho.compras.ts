import { Produto } from "../../modelo/produto";

export class LojaCarrinhoCompras {
  public produtos: Produto[] = [];
  public evitarDuplicidade: boolean;

  public adicionar(produto: Produto) {
    var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
    if (!produtoLocaStorage) {
      //se não existir nada dentro do locaStorage
      this.produtos.push(produto);
    } else {
      //se ja existir pelo menos um item armazenado na sessao(locasLocalStorage)
      this.produtos = JSON.parse(produtoLocaStorage);
      for (let produtoTeste of this.produtos) {
        if (produtoTeste.id == produto.id) {
          alert("Produto já adicionado no carrinho ");
          this.evitarDuplicidade = true;
          
        }
      }
      if (!this.evitarDuplicidade) {
        this.produtos.push(produto);
      } else {
        localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
      }
    }
    localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
  }

  public obterProdutos(): Produto[] {
    var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
    if (produtoLocaStorage)
      return JSON.parse(produtoLocaStorage);
    return this.produtos;
  }

  public removerProduto(produto: Produto){
    var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
    if (produtoLocaStorage) {
      this.produtos = JSON.parse(produtoLocaStorage);
      this.produtos = this.produtos.filter(p => p.id != produto.id);
      localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
    }
  }
  public atualizar(produtos: Produto[]) {
    localStorage.setItem("produtoLocaStorage", JSON.stringify(produtos));
  }

  public temItensCarrinhoCompras(): boolean {
    var itens = this.obterProdutos();
    return (itens.length > 0);
  }
}

