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
            for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
                var produtoTeste = _a[_i];
                if (produtoTeste.id == produto.id) {
                    alert("Produto já adicionado no carrinho ");
                    this.evitarDuplicidade = true;
                }
            }
            if (!this.evitarDuplicidade) {
                this.produtos.push(produto);
            }
            else {
                localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
            }
        }
        localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
    };
    LojaCarrinhoCompras.prototype.obterProdutos = function () {
        var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
        if (produtoLocaStorage)
            return JSON.parse(produtoLocaStorage);
        return this.produtos;
    };
    LojaCarrinhoCompras.prototype.removerProduto = function (produto) {
        var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
        if (produtoLocaStorage) {
            this.produtos = JSON.parse(produtoLocaStorage);
            this.produtos = this.produtos.filter(function (p) { return p.id != produto.id; });
            localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
        }
    };
    LojaCarrinhoCompras.prototype.atualizar = function (produtos) {
        localStorage.setItem("produtoLocaStorage", JSON.stringify(produtos));
    };
    LojaCarrinhoCompras.prototype.temItensCarrinhoCompras = function () {
        var itens = this.obterProdutos();
        return (itens.length > 0);
    };
    return LojaCarrinhoCompras;
}());
exports.LojaCarrinhoCompras = LojaCarrinhoCompras;
//# sourceMappingURL=loja.carrinho.compras.js.map