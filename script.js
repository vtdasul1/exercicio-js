document.getElementById('mostrar-variaveis').addEventListener('click',function(){
    //Variaveis simples
    let idade = 25;
    let nome = "Ana";
    let casado = true;

    document.getElementById('variavel-simples').innerText = `Simples: Nome:${nome}, Idade: ${idade}, Casado: ${casado}`;

    // Variaveis compostas
    let frutas = ["maçã", "banana", "laranja"];
    let pessoa = {
        nome: "Carlos",
        idade: 30,
        casado: false
    };
    document.getElementById('variavel-composta').innerText = `Compostas: frutas: ${frutas.join(',')}, Pessoa: Nome: ${pessoa.nome}, idade: ${pessoa.idade}, Casado: ${pessoa.casado}`;

    //Variaveis de variaveis
    let a = 10;
    let b = 20;
    let c = 30;
    
    let variaveis = [a,b,c];
    let chave = "dinamica";
    let objetoDinamico = {
        dinamica: "Este é um valor dinâmico"
    };
    document.getElementById('variavel-de-variaveis').innerText = `Variaveis de variaveis: 
    Array: ${variaveis.join(',')}, Objeto Dinâmico: ${objetoDinamico[chave]}`;
});

//Exercicio: Adicionar frutas a um array
let frutasArray = ["maçã", "banana", "laranja"];

document.getElementById('form-frutas').addEventListener('submit', function(event){
    event.preventDefault();
    let novaFruta = document.getElementById('nova-fruta').value;
    frutasArray.push(novaFruta);
    document.getElementById('lista-frutas').innerText = `Lista de frutas ${frutasArray.join(',')}`;
    document.getElementById('nova-fruta').value= '';
})