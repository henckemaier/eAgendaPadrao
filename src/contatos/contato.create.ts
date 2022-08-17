import { IPaginaFormulario } from "../shared/pagina.create.interface.js";
import { IPaginaHTML } from "../shared/pagina.interface.js";
import { IRepositorio } from "../shared/repositorio.interface.js";
import { Contato } from "./contato.model.js";
import { ContatoRepositoryLocalStorage } from "./contato.repository.local-storage.js";

class ContatoPaginaCadastro implements IPaginaHTML, IPaginaFormulario {
        private txtNome: HTMLInputElement;
        private txtEmail: HTMLInputElement;
        private txtTelefone: HTMLInputElement;
        private txtEmpresa: HTMLInputElement;
        private txtCargo: HTMLInputElement;
        private btnSalvar: HTMLButtonElement;

        private idSelecionado: string;

        constructor(private repositorioContatos: IRepositorio<Contato>, id?: string) {
                this.configurarElementos();

                if (id) {
                        this.idSelecionado = id;

                        const contatoSelecionado = this.repositorioContatos.selecionarPorId(id);

                        if (contatoSelecionado)
                                this.preencherFormulario(contatoSelecionado);
                }
        }

        configurarElementos(): void {
                this.txtNome = document.getElementById("txtNome") as HTMLInputElement;
                this.txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
                this.txtTelefone = document.getElementById("txtTelefone") as HTMLInputElement;
                this.txtEmpresa = document.getElementById("txtEmpresa") as HTMLInputElement;
                this.txtCargo = document.getElementById("txtCargo") as HTMLInputElement;
                this.btnSalvar = document.getElementById("btnSalvar") as HTMLButtonElement;

                //operador discard _
                this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros());
        }

        gravarRegistros(): void {
                const novoContato = new Contato(this.txtNome.value, this.txtEmail.value, this.txtTelefone.value, this.txtEmpresa.value, this.txtCargo.value);

                this.repositorioContatos.inserir(novoContato);

                //metodo para redirecionar usuario
                window.location.href = "contato.list.html";
        }      
}

const params = new URLSearchParams(window.location.search);

const id = params.get("id") as string;

new ContatoPaginaCadastro(new ContatoRepositoryLocalStorage(), id);