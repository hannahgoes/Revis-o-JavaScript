const fila = [
    {
        nome: "Hannah",
        sobrenome: "Góes",
        idade: 24,
    },
    {
        nome: "Cassiano",
        sobrenome: "Peres",
        idade: 32,
    },
    {
        nome: "Jose",
        sobrenome: "Pereira",
        idade: 29,
    }
    
]


//varrendo o array da fila obtendo cada pessoa
for(pessoa of fila){
    console.log(pessoa.nome)
}


//varrendo o array da fila obtendo o índice de cada pessoa no array 
for(pessoa of fila.entries()){
    //imprime a pessoa com seu indíce
    console.log(pessoa)
    //imprime o indice e o nome da pessoa
    console.log(pessoa[0] + ": " + pessoa [1].nome)
}