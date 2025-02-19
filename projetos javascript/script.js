const convertButton = document.querySelector(".convert-button") //1

function convertValues () {//2
    const inputCurrencyValue = document.querySelector(".input-currency").value //3
    const DolarToday = 5.69
    const convertedValue = inputCurrencyValue / DolarToday

    console.log(convertedValue)
}

convertButton.addEventListener ("click, convertValues")



/* Parte 1 
1- Criei uma variavel puxando o botao para o java 
2- criei uma função conectada no botão, função de click
3-criei outra variavel puxando o valor que for inserido no input
4- criei uma variavel com a cotação do dolar atual 
5- criei outra variavel com o nome convertedvalue para fazer o calculo do valor colocado no 
input dividido pelo valor colocado no dolar.
6- dei um console.log com a variavel convertedvalue para fazer essa ação
7- fora da função criei um evento para o botão, de quando clicar ele fazer essa converção do valor 

*/