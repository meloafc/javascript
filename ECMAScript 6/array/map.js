//O map executa a função de callback recebida
//por parâmetro para cada elemento iterado de
//numeros e constrói um novo Array com base nos
//retornos de cada uma das chamadas.


var numeros = [1,2,3];
var dobro = [];

//com for
for(var i=0; i<numeros.length; i++) {
	dobro.push(numeros[i] * 2);
}

console.log(numeros); //[1,2,3]
console.log(dobro); //[2,4,6]


//com map
var dobro = [];
var dobro = numeros.map(function(numero) {
	return numero * 2;
})

console.log(numeros); //[1,2,3]
console.log(dobro); //[2,4,6]