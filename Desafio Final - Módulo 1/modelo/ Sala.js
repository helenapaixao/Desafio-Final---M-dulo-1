

class Sala{
    constructor(){

        this.cadeiras=[];
        this.cadeira={};
        
        //ocupado – true = reservado, false = livre (default)
    }
    lerDados(){

       let sessao = document.getElementById("novasessao").value;
       let cliente = document.getElementById("cliente").value;

        this.cadeira.ocupado = true;
        this.cadeira.livre= false;

    }
    validar(){
        

    }
        // let btoVerde = document.getElementById("botaoVerde ").value;
        // btoVerde.addEventListener("click",function(event)
        // {
        //     btoVerde.style.backgroundColor='red';

        // }   
    
    criarTabela(){

        let tabela = document.getElementById("ResultadoFinal");
        tabela.innerHTML=" ";
        for(let i=0;i<this.cadeiras;i++){

            let linha = tabela.insertRow();
            let celulaFilme = linha.insertCell(0);
            let celulaData = linha.insertCell(1);
            let celulaInicio = linha.insertCell(2);
            let celulaLegendado= linha.insertCell(3);
            let celulatresD= linha.insertCell(4);


        }
    

    }


}