'use strict';

let objetoVazio = {};

const retangulo = {
  // define as propriedades e valores padrão
  largura: 1,
  altura: 1,

  // define os métodos do objeto
  area() { // nas versões ES5 - tinha que escrever area: function () {}
    return this.largura * this.altura;
  }
}

// o objeto já está construído
// já podemos chamar seus métodos e especificar valores para suas propriedades
// todas as propriedades são writable, configurable e enumerable

retangulo.largura = 2;
console.log(retangulo.altura); // mostra 1
console.log(retangulo['altura']); // notação de Array, mostra 1
let propriedade = 'largura';
console.log(retangulo[propriedade]); // notação de Array, mostra 2
console.log(retangulo.area()); // mostra 2
