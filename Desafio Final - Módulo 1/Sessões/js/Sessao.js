class Sessao {

    constructor() {
        this.sessoes = [];
        this.sessao = {};
        this.contador = 0;
        this.idEdicao = null;
    }

    lerDados() {

        let filmedaSessao = document.getElementById("filmeSessao").value;
        let sala = document.getElementById("salaSessao").value;
        //select
        let dubladolegendado = document.getElementById("dubladolegendado").value;
        //select
        let tresD = document.getElementById("tresD").value;
        let datasessao = document.getElementById("datasessao").value;
        let horario = document.getElementById("horario").value;
        this.sessao = {};
        this.sessao.filmedaSessao = filmedaSessao;
        this.sessao.sala = sala;
        this.sessao.dubladolegendado = dubladolegendado;
        this.sessao.tresD = tresD;
        this.sessao.datasessao = datasessao;
        this.sessao.horario = horario;
    }
    salvar() {

        this.lerDados();
        if (this.validar()) {
            if (this.idEdicao != null) {
                for (let i = 0; i < this.sessoes.length; i++) {
                    if (this.sessoes[i].id == this.idEdicao) {
                        this.sessoes[i].filmedaSessao = this.sessao.filmedaSessao;
                        this.sessoes[i].sala = this.sessao.sala;
                        this.sessoes[i].dubladolegendado = this.dubladolegendado;
                        this.sessoes[i].tresD = this.sessao.tresD;
                        this.sessoes[i].datasessao = this.sessao.datasessao;
                        this.sessoes[i].horario = this.sessao.horario;
                        this.idEdicao = null;
                    }

                }
            } else {
                this.sessao.id = this.contador;
                this.sessoes.push(this.sessao);
                this.contador++;
            }

            this.gerarTabela();
        }
        this.limpar();
    }
    limpar() {

        document.getElementById("filmeSessao").value;
        document.getElementById("salaSessao").value;
        document.getElementById("dubladolegendado").value;
        document.getElementById("3D/2D").value;
        document.getElementById("datasessao").value;
        document.getElementById("horario").value;
    }
    validar() {

        let mensagem = "";

        if (this.sessao.filmedaSessao == "") {
            mensagem += "O nome do filme deve ser preenchido"
        }
        if (this.sessao.sala == "") {
            mensagem += "A duração do filme deve ser preenchida"
        }
        if (this.sessao.dubladolegendadoSelecionado == "") {

            mensagem += "A classificação do filme  deve ser preenchida"
        }
        if (this.sessao.tresD == "") {

            mensagem += "O genero do filme   deve ser preenchido"
        }
        if (this.sessao.datasessao == "") {

            mensagem += "A sinopse do filme  deve ser preenchida"
        }
        if (this.sessao.horario == "") {

            mensagem += "A sinopse do filme  deve ser preenchida"
        }

        if (mensagem == "") {
            return true;
        }
        alert(mensagem + " ");
        return false;
    }
    editar(id) {
        for (let i = 0; i < this.sessoes.length; i++) {
            if (id == this.sessoes[i].id) {
                this.idEdicao = id;
                this.sessoes[i].filmedaSessao = this.sessao.filmedaSessao;
                this.sessoes[i].sala = this.sessao.sala;
                this.sessoes[i].dubladolegendado = this.sessao.dubladolegendado;
                this.sessoes[i].tresD = this.sessao.tresD;
                this.sessoes[i].datasessao = this.sessao.datasessao;
                this.sessoes[i].horario = this.sessao.horario;
            }
        }
    }
    deletar(id) {
        if (window.confirm("Deseja excluir?")) {
            for (let i = 0; i < this.sessoes.length; i++) {
                if (this.sessoes[i].id == id) {
                    this.sessoes.splice(i, 1);
                    this.gerarTabela();
                }
            }
        }

    }
    gerarTabela() {
        let tabela = document.getElementById("tabela");
        tabela.innerHTML = "";
        for (let i = 0; i < this.sessoes.length; i++) {

            let linha = tabela.insertRow();
            let celulaNome = linha.insertCell(0);
            let celulaSala = linha.insertCell(1);
            let celulaDublado = linha.insertCell(2);
            let celulatresD = linha.insertCell(3);
            let celulaData = linha.insertCell(4);
            let celulaHorario = linha.insertCell(5);
            let celulaEditar = linha.insertCell(6);
            let celulaExcluir = linha.insertCell(7);

            let imagemEditar = document.createElement("img");
            let imagemExcluir = document.createElement("img");

            imagemEditar.setAttribute("src", "img/edit.svg");
            imagemExcluir.setAttribute("src", "img/delete.svg");

            imagemEditar.setAttribute("onclick", `novoSessao.editar(${this.sessoes[i].id})`);
            imagemExcluir.setAttribute("onclick", `novoSessao.deletar(${this.sessoes[i].id})`);

            celulaNome.innerHTML = this.sessoes[i].filmedaSessao;
            celulaSala.innerHTML = this.sessoes[i].sala;
            celulaDublado.innerHTML = this.sessoes[i].dubladolegendado;
            celulatresD.innerHTML = this.sessoes[i].tresD;
            celulaData.innerHTML = this.sessoes[i].datasessao;
            celulaHorario.innerHTML = this.sessoes[i].horario;
            celulaEditar.appendChild(imagemEditar);
            celulaExcluir.appendChild(imagemExcluir);

        }

    }
}

let novoSessao = new Sessao();
