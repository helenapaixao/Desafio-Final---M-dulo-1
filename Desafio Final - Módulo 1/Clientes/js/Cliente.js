class Cliente{

    constructor(){


        this.clientes =[];
        this.cliente={};
        this.contador =0;
        this.idEdicao=null;

    }

    lerDados(){

        let nome = document.getElementById("nomeCliente").value;
        let idade = document.getElementById("idadeCliente").value;
        let email = document.getElementById("emailCliente").value; 

        this.cliente={};
        this.cliente.nome = nome; 
        this.cliente.idade = idade;
        this.cliente.email= email;



    }
    salvar(){
        this.lerDados();
        if(this.validar()){
            if(this.idEdicao != null){
                for(let i=0;i<this.clientes.length;i++){
                    if(this.clientes[i].id == this.idEdicao){

                        this.clientes[i].nome =this.cliente.nome;
                        this.clientes[i].idade=this.cliente.idade;
                        this.clientes[i].email=this.cliente.email;
                        this.idEdicao=null;
                    }

                }
            }else{
                this.cliente.id = this.contador;
                this.clientes.push(this.cliente);
                this.contador++;
            }

            this.gerarTabela();
        }
        this.limpar();



    }

    limpar(){

      document.getElementById("nomeCliente").value =" ";
         document.getElementById("idadeCliente").value=" ";
       document.getElementById("emailCliente").value=" ";


    }
    validar(){


        let mensagem = "";

        if (this.cliente.nome == "") {
            mensagem += "O nome do cliente deve ser preenchido\n"
        }
        if (this.cliente.idade == "") {
            mensagem += "A idade do cliente deve ser preenchido\n"
        }
        if (this.cliente.email == "") {

            mensagem += "O email do cliente deve ser preenchido\n"
        } 

        if (mensagem == "") {
            return true;
        }

        alert(mensagem + " ");
        return false;

    
    }
    editar(id){

        for (let i = 0; i < this.clientes.length; i++) {
            if (id == this.clientes[i].id) {
                this.idEdicao = id;

             document.getElementById("nomeCliente").value = this.clientes[i].nome;
               document.getElementById("idadeCliente").value= this.clientes[i].idade;
                document.getElementById("emailCliente").value = this.clientes[i].email; 
            }


        }



    }
    deletar(id){
        if (window.confirm("Deseja excluir?")) {
            for (let i = 0; i < this.clientes.length; i++) {
                if (this.clientes[i].id == id) {
                    this.clientes.splice(i, 1);
                    this.gerarTabela();
                }
            }
        }

    }
    gerarTabela(){
        let tabela = document.getElementById("resultadoClientes");
        tabela.innerHTML = "";

        for (let i = 0; i < this.clientes.length; i++) {

            let linha = tabela.insertRow();
            let celulaNome = linha.insertCell(0);
            let celulaIdade = linha.insertCell(1);
            let celulaEmail = linha.insertCell(2);
            let celulaExcluir = linha.insertCell(3);
            let celulaEditar= linha.insertCell(4);

            let imagemEditar= document.createElement("img");
            let imagemExcluir = document.createElement("img");

            imagemEditar.setAttribute("src", "img/edit.svg");
            imagemExcluir.setAttribute("src", "img/delete.svg");

            imagemEditar.setAttribute("onclick", `novoCliente.editar(${this.clientes[i].id})`);
            imagemExcluir.setAttribute("onclick", `novoCliente.deletar(${this.clientes[i].id})`);

            celulaNome.innerHTML = this.clientes[i].nome;
            celulaIdade.innerHTML = this.clientes[i].idade;
            celulaEmail.innerHTML = this.clientes[i].email;
            

            celulaEditar.appendChild(imagemEditar);
            celulaExcluir.appendChild(imagemExcluir);

        }

    }
}

let novoCliente = new Cliente();