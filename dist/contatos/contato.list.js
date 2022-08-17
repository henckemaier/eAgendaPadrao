import { ContatoRepositoryLocalStorage } from "./contato.repository.local-storage.js";
class ContatoPaginaListagem {
    constructor(repositorioContatos) {
        this.repositorioContatos = repositorioContatos;
        this.configurarElementos();
        this.atualizarTabela();
    }
    configurarElementos() {
        this.tabela = document.getElementById("tabela");
    }
    atualizarTabela() {
        const contatos = this.repositorioContatos.selecionarTodos();
        let corpoTabela = this.tabela.getElementsByTagName("tbody")[0];
        contatos.forEach(contato => {
            const novaLinha = corpoTabela.insertRow();
            Object.values(contato).forEach((valor) => {
                const novaCelula = novaLinha.insertCell();
                novaCelula.innerText = valor;
            });
        });
    }
}
new ContatoPaginaListagem(new ContatoRepositoryLocalStorage());
