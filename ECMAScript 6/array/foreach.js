//Dentro do forEach, passamos uma função anônima de retorno.
//Ela é executada para cada elemento dentro da lista.
//A cada iteração, o valor da list é atribuído à variável
//passada como parâmetro no callback. 


var nomes = ['maria', 'josé', 'joão'];

//ES5: usando o for
for(var i=0; i<nomes.length; i++) {
	console.log(nomes[i]); // maria, josé, joão
}

//forEach com funcao anonima
nomes.forEach(function(nome) {
	console.log(nome); // maria, josé, joão
})

//forEach com funcao declarada
function imprimeNome(nome) {
	console.log(nome);
}

nomes.forEach(imprimeNome); // maria, josé, joão


var canais = ['Globo', 'Sbt', 'Record'];
canais.forEach(function(canal) {
	canais.push('RedeTV');// este item sera ignorado no print
	console.log(canal); // [ 'Globo', 'Sbt', 'Record' ]
})

console.log(canais); // [ 'Globo', 'Sbt', 'Record', 'RedeTV', 'RedeTV', 'RedeTV' ]