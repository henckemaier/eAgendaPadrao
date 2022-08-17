import { IPaginaHTML } from "./shared/pagina.interface.js";

class Index implements IPaginaHTML{
        btnCadastrar: HTMLButtonElement;

        constructor(){
                this.configurarElementos();
        }
        
        //metodo resposavel pelo data binding dos elementos da pagina
        public configurarElementos(): void {

        }
}

new Index();