var alunos = [
  {nome: 'João', idade: 15},
  {nome: 'José', idade: 18},
  {nome: 'Maria', idade: 20}
];

// com ES5
var alunosDeMaior = [];
for(var i=0; i<alunos.length; i++) {
  if(alunos[i].idade >= 18) {
    alunosDeMaior.push(alunos[i]);
  }
}
console.log(alunosDeMaior);
// [ { nome: 'José', idade: 18 }, { nome: 'Maria', idade: 20 } ]


// Com filter
var alunosDeMaior = alunos.filter(function(aluno) {
  return aluno.idade >= 18;
});
console.log(alunosDeMaior);
// [ { nome: 'José', idade: 18 }, { nome: 'Maria', idade: 20 } ]
