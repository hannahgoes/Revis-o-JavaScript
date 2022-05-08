//declaração de variável de escopo global com let
let numero = 4;

console.log(numero)
//Erro ao redeclarar variável com let  
// let numero = 20;

calcula()

function calcula (){
    //Declaração de variável de escopo de função, esta variável só existe nessa parte do programa
    let numero = 20;
    console.log(numero * 2)
}