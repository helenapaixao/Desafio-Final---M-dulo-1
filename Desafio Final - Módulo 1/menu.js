class Menu {

    reservas() {

        document.getElementById("paginaPrincipal").innerHTML = '<object type="text/html" data="Reservas/Reservas.html" ></object>'
    }
    sessoes() {

        document.getElementById("paginaPrincipal").innerHTML = '<object type="text/html" data="Sessões/Sessões.html" ></object>'


    }
    salas() {
        document.getElementById("paginaPrincipal").innerHTML = '<object type="text/html" data="Salas/Salas.html" ></object>'

    }
    clientes() {
        document.getElementById("paginaPrincipal").innerHTML = '<object type="text/html" data="Clientes/clientes.html" ></object>'

    }
    filmes() {

        document.getElementById("paginaPrincipal").innerHTML = '<object type="text/html" data="Filmes/Filmes.html" ></object>'

    }




}

let menuPrincipal = new Menu();