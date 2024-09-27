

let productValue = Number(prompt('Insira o valor do produto: '))
//Pede ao usuário um valor, converte para número e o guarda na variável productValue//

if (productValue >=20){
    document.getElementById('resultado').innerHTML = 'Aprovado'

}
else{
     document.getElementById('resultado').innerHTML = 'Reprovado'

}