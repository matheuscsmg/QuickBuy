"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LojaCarrinhoCompras = void 0;
var LojaCarrinhoCompras = /** @class */ (function () {
    function LojaCarrinhoCompras() {
        this.produtos = [];
    }
    LojaCarrinhoCompras.prototype.adicionar = function (produto) {
        var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
        if (!produtoLocaStorage) {
            //se não existir nada dentro do locaStorage
            this.produtos.push(produto);
        }
        else {
            //se ja existir pelo menos um item armazenado na sessao(locasLocalStorage)
            this.produtos = JSON.parse(produtoLocaStorage);
            this.produtos.push(produto);
        }
        localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
    };
    LojaCarrinhoCompras.prototype.obterProdutos = function () {
        var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
        if (produtoLocaStorage)
            return JSON.parse(produtoLocaStorage);
    };
    LojaCarrinhoCompras.prototype.removerProdutos = function (produto) {
    };
    return LojaCarrinhoCompras;
}());
exports.LojaCarrinhoCompras = LojaCarrinhoCompras;
//# sourceMappingURL=loja.carrinho.compras.js.map