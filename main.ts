import { Colors } from "./src/util/Colors";
import { Input } from "./src/util/Input";

export function main() {

    let option: number


    while(true){
        console.log(Colors.bg.black, Colors.fg.white, " *****************************************************");
        console.log("                                                      ");
        console.log("                      Z-Farma                         ");
        console.log("                                                      ");
        console.log("  *****************************************************");
        console.log("                                                       ");
        console.log("              1 - Criar Produto                        ");
        console.log("              2 - Listar todos os Produtos             ");
        console.log("              3 - Buscar Produto por código            ");
        console.log("              4 - Atualizar Produto                    ");
        console.log("              5 - Apagar Produto                       ");
        console.log("              0 - Sair                                 ");
        console.log("                                                       ");
        console.log("  *****************************************************", Colors.reset);
        
        console.log(" Entre com a opção desejada: ")
        option = Input.questionInt(" ")

        if (option === 0){
            process.exit(0)
        }

        switch(option){
            case 1:
                console.log(Colors.fg.whitestrong,"\nCriar Produto\n")
                keyPress()
                break;
            case 2:
                console.log(Colors.fg.whitestrong,"\nListar todos os Produtos\n")
                keyPress()
            break;
            case 3:
                console.log(Colors.fg.whitestrong,"\nBuscar Produto por código\n")
                keyPress()
            break;
            case 4:
                console.log(Colors.fg.whitestrong,"\nAtualizar Produto\n")
                keyPress()
            break;
            case 5:
                console.log(Colors.fg.whitestrong,"\nDeletar Produto\n")
                keyPress()
            break;
            default:
                console.log(Colors.fg.redstrong,"\nOpção Inválida\n")
                keyPress()
            break;

        }
    }
}

/* Função de pausa entre as opções do menu */
function keyPress(): void {
  console.log(Colors.reset, "\nPressione enter para continuar...");
  Input.prompt();
}

main()
