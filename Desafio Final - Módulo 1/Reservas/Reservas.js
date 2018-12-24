const xmlhttp = new XMLHttpRequest();
var filmes = [];

class Reservas {

    pegarSessoes() {

        xmlhttp.open("GET", '../Filmes/FilmesCadastrados.json', false);
        xmlhttp.send();
        filmes = JSON.parse(xmlhttp.responseText);
        var selectBox = document.getElementById('sessoes');

        for (var i = 0, l = filmes.length; i < l; i++) {
            var filme = filmes[i];
            selectBox.options.add(new Option(filme.text, filme.value, filme.selected));
        }
    }
    pegarClientes() {

        xmlhttp.open("GET", '../Filmes/ClientesCadastrados.json', false);
        xmlhttp.send();
        filmes = JSON.parse(xmlhttp.responseText);
        var selectBox = document.getElementById('cliente');

        for (var i = 0, l = filmes.length; i < l; i++) {
            var filme = filmes[i];
            selectBox.options.add(new Option(filme.text, filme.value, filme.selected));
        }
    }

    clicarNoBotão(id) {
        document.getElementById(id).style.backgroundColor = "#ff0000";
    }

    criarTabela() {

        let tabela = document.getElementById("tabela");
        tabela.innerHTML = " ";

        for (let i = 0; i < this.valores; i++) {

            let linha = tabela.insertRow();
            let celulaNome = linha.insertCell(0);
            let celulaData = linha.insertCell(1);
            let celulaLegenda = linha.insertCell(2);
            let celulatresD = linha.insertCell(3);
            let celulaImgEdit = linha.insertCell(4);
            let celulaImgDelete = linha.insertCell(5);


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

let novaReserva = new Reservas();