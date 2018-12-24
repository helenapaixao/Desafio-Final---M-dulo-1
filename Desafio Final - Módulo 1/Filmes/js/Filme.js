class Filme {

    constructor() {


        this.filmes = [];
        this.filme = {};
        this.contador = 0;
        this.idEdicao = null;

    }

    lerDados() {
        let nome = document.getElementById("nomeFilme").value;
        let duracao = document.getElementById("duracao").value;
        let classificacao = document.getElementById("classificacao").value;
        let genero = document.getElementById("genero").value;
        let sinopse = document.getElementById("sinopse").value;

        this.filme = {};
        this.filme.nome = nome;
        this.filme.duracao = duracao;
        this.filme.classificacao = classificacao;
        this.filme.genero = genero;
        this.filme.sinopse = sinopse;



    }

    salvar() {
        this.lerDados();
        if (this.validar()) {
            if (this.idEdicao != null) {
                for (let i = 0; i < this.filmes.length; i++) {
                    if (this.filmes[i].id == this.idEdicao) {
                        this.filmes[i].nome = this.filme.nome;
                        this.filmes[i].duracao = this.filme.duracao;
                        this.filmes[i].classificacao = this.filmes.classificacao;
                        this.filmes[i].genero = this.filmes.genero;
                        this.filmes[i].sinopse = this.filmes.sinopse;
                        this.idEdicao = null;
                    }
                }

            } 
            else {

                this.filme.id = this.contador;
                this.filmes.push(this.filme);
                this.contador++;
            }
            this.gerarTabela();
        }
        this.limpar();
    }

    limpar() {

        document.getElementById("nomeFilme").value;
        document.getElementById("duracao").value;
        document.getElementById("classificacao").value;
        document.getElementById("genero").value;
        document.getElementById("sinopse").value;
    }


    validar() {


        let mensagem = "";

        if (this.filme.nome == "") {
            mensagem += "O nome do filme deve ser preenchido \n"
        }
        if (this.filme.duracao == "") {
            mensagem += "A duração do filme deve ser preenchida \n"
        }
        if (this.filme.classificacao == "") {

            mensagem += "A classificação do filme  deve ser preenchida \n"
        }
        if (this.filme.genero == "") {

            mensagem += "O genero do filme   deve ser preenchido \n"
        }
        if (this.filme.sinopse == "") {

            mensagem += "A sinopse do filme  deve ser preenchida \n"
        }

        if (mensagem == "") {
            return true;
        }

        alert(mensagem + " ");
        return false;


    }
    editar(id) {

        for (let i = 0; i < this.filmes.length; i++) {
            if (id == this.filmes[i].id) {
                this.idEdicao = id;

                document.getElementById("nomeFilme").value = this.filmes[i].nome;
                document.getElementById("duracao").value = this.filmes[i].duracao;
                document.getElementById("classificacao").value = this.filmes[i].classificacao;
                document.getElementById("genero").value = this.filmes[i].genero;
                document.getElementById("sinopse").value = this.filmes[i].sinopse;
            }


        }



    }
    deletar(id) {
        if (window.confirm("Deseja excluir?")) {
            for (let i = 0; i < this.filmes.length; i++) {
                if (this.filmes[i].id == id) {
                    this.filmes.splice(i, 1);
                    this.gerarTabela();
                }
            }
        }

    }
    gerarTabela() {
        let tabela = document.getElementById("tabela");
        tabela.innerHTML = "";

        for (let i = 0; i < this.filmes.length; i++) {

            let linha = tabela.insertRow();
            let celulaNome = linha.insertCell(0);
            let celulaDuracao = linha.insertCell(1);
            let celulaClassificacao = linha.insertCell(2);
            let celulaGenero = linha.insertCell(3);
            let celulaSinopse = linha.insertCell(4);
            let celulaEditar = linha.insertCell(5);
            let celulaExcluir = linha.insertCell(6);

            let imagemEditar = document.createElement("img");
            let imagemExcluir = document.createElement("img");

            imagemEditar.setAttribute("src", "img/edit.svg");
            imagemExcluir.setAttribute("src", "img/delete.svg");

            imagemEditar.setAttribute("onclick", `novoFilme.editar(${this.filmes[i].id})`);
            imagemExcluir.setAttribute("onclick", `novoFilme.deletar(${this.filmes[i].id})`);

            celulaNome.innerHTML = this.filmes[i].nome;
            celulaDuracao.innerHTML = this.filmes[i].duracao;
            celulaClassificacao.innerHTML = this.filmes[i].classificacao;
            celulaGenero.innerHTML = this.filmes[i].genero;
            celulaSinopse.innerHTML = this.filmes[i].sinopse;

            celulaEditar.appendChild(imagemEditar);
            celulaExcluir.appendChild(imagemExcluir);

        }

    }
}

let novoFilme = new Filme();