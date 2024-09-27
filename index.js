

let productValue = Number(prompt('Insira o valor do produto: '))
//Pede ao usuário um valor, converte para número e o guarda na variável productValue//

if (productValue >=20){
    document.getElementById('resultado').innerHTML = 'Aprovado'

}
//na linha 6: Condição 'If', se o valor do produto(productValue) for maior(>) ou igual(=) a 20
//na linha 7: irá imprimir o resultado "Aprovado"
else{
     document.getElementById('resultado').innerHTML = 'Reprovado'
  //caso o valor não esteja dentro dos paramentros do If da linha 6, irá imprimir o resultado "Reprovado"
}