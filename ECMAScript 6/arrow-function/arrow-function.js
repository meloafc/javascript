// com ES5
var boasVindasES5 = function(nome) {
  return "Seja bem-vindo, " + nome;
}


// com Arrow function
var boasVindasArrowFunction = (nome) => {
  return "Seja bem-vindo, " + nome;
}


// com só um parâmetro podemos eliminar os parênteses
var boasVindasArrowFunctionSemParenteses = nome => {
  return "Seja bem-vindo, " + nome;
}


// como só temos uma linha dentro do corpo da função,
// podemos eliminar a palavra-chave return e as chaves
var boasVindasArrowFunctionEmUmaLinha = nome => "Seja bem-vindo, " + nome;


// podemos trocar var por const
const boasVindasConst = nome => "Seja bem-vindo, " + nome;


console.log(boasVindasES5("Black")); // Seja bem-vindo, Black
console.log(boasVindasArrowFunction("Black")); // Seja bem-vindo, Black
console.log(boasVindasArrowFunctionSemParenteses("Black")); // Seja bem-vindo, Black
console.log(boasVindasArrowFunctionEmUmaLinha("Black")); // Seja bem-vindo, Black
console.log(boasVindasConst("Black")); // Seja bem-vindo, Black
