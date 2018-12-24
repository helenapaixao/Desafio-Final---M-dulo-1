class Salas {

    constructor() {
        this.salas = [];
        this.sala = {};
        this.contador = 0;
        this.idEdicao = null;
    }

    lerDados() {

        let filmeSala = document.getElementById("filmeSala").value;
      
        //select
        let dubladolegendado = document.getElementById("dubladolegendado").value;
        //select
        let tresD = document.getElementById("tresD").value;
        let datasessao = document.getElementById("datasessao").value;
        let horario = document.getElementById("horario").value;
        this.sala = {};
        
        this.sala.filmeSala = filmeSala;
       
        this.sala.dubladolegendado = dubladolegendado;
        this.sala.tresD = tresD;
        this.sala.datasessao = datasessao;
        this.sala.horario = horario;
    }
    salvar() {

        this.lerDados();
        if (this.validar()) {
            if (this.idEdicao != null) {
                for (let i = 0; i < this.salas.length; i++) {
                    if (this.salas[i].id == this.idEdicao) {
                        this.salas[i].filmeSala = this.sala.filmeSala;
                       
                        this.salas[i].dubladolegendado = this.dubladolegendado;
                        this.salas[i].tresD = this.sessao.tresD;
                        this.salas[i].datasessao = this.sessao.datasessao;
                        this.salas[i].horario = this.sessao.horario;
                        this.idEdicao = null;
                    }

                }
            } else {
                this.sala.id = this.contador;
                this.salas.push(this.sala);
                this.contador++;
            }

            this.gerarTabela();
        }
        this.limpar();
    }
    limpar() {

        document.getElementById("filmeSala").value;
     
        document.getElementById("dubladolegendado").value;
        document.getElementById("3D/2D").value;
        document.getElementById("datasessao").value;
        document.getElementById("horario").value;
    }
    validar() {

        let mensagem = "";

        if (this.sala.filmeSala == "") {
            mensagem += "O nome do filme da sala deve ser preenchido"
        }
     
        if (this.sala.dubladolegendadoSelecionado == "") {

            mensagem += "A classificação do filme  deve ser preenchida"
        }
        if (this.sala.tresD == "") {

            mensagem += "O genero do filme   deve ser preenchido"
        }
        if (this.sala.datasessao == "") {

            mensagem += "A sinopse do filme  deve ser preenchida"
        }
        if (this.sala.horario == "") {

            mensagem += "A sinopse do filme  deve ser preenchida"
        }

        if (mensagem == "") {
            return true;
        }
        alert(mensagem + " ");
        return false;
    }
    editar(id) {

        for (let i = 0; i < this.salas.length; i++) {
            if (id == this.salas[i].id) {
                this.idEdicao = id;
                this.salas[i].filmeSala = this.sala.filmeSala;
               
                this.salas[i].dubladolegendado = this.sala.dubladolegendado;
                this.salas[i].tresD = this.sala.tresD;
                this.salas[i].datasessao = this.sala.datasessao;
                this.salas[i].horario = this.sala.horario;
            }
        }
    }
    deletar(id) {
        if (window.confirm("Deseja excluir?")) {
            for (let i = 0; i < this.salas.length; i++) {
                if (this.salas[i].id == id) {
                    this.salas.splice(i, 1);
                    this.gerarTabela();
                }
            }
        }

    }
    gerarTabela() {
        let tabela = document.getElementById("tabela");
        tabela.innerHTML = "";
        for (let i = 0; i < this.salas.length; i++) {

            let linha = tabela.insertRow();
            let celulaNome = linha.insertCell(0);
            
            let celulaDublado = linha.insertCell(1);
            let celulatresD = linha.insertCell(2);
            let celulaData = linha.insertCell(3);
            let celulaHorario = linha.insertCell(4);
            let celulaEditar = linha.insertCell(5);
            let celulaExcluir = linha.insertCell(6);

            let imagemEditar = document.createElement("img");
            let imagemExcluir = document.createElement("img");

            imagemEditar.setAttribute("src", "img/edit.svg");
            imagemExcluir.setAttribute("src", "img/delete.svg");

            imagemEditar.setAttribute("onclick", `novaSala.editar(${this.salas[i].id})`);
            imagemExcluir.setAttribute("onclick", `novaSala.deletar(${this.salas[i].id})`);

            celulaNome.innerHTML = this.salas[i].filmeSala;
            
            celulaDublado.innerHTML = this.salas[i].dubladolegendado;
            celulatresD.innerHTML = this.salas[i].tresD;
            celulaData.innerHTML = this.salas[i].datasessao;
            celulaHorario.innerHTML = this.salas[i].horario;
            celulaEditar.appendChild(imagemEditar);
            celulaExcluir.appendChild(imagemExcluir);

        }

    }
}

let novaSala = new Salas();
