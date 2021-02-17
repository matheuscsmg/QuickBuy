import { Component} from "@angular/core"

@Component({
  selector: "app-produto",
  template : "<html><body>{{ obterNome() }}</body></html>"
})
export class ProdutoComponent{//Nome das classes começando com maíusculo por conta da convenção PascalCase

  /* camelCase para varáveis, atributos e nomes das funções */
  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome(): string {
    return "Samsung";
  }

}
