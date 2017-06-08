var counter = require('./counter.json');

var on = 0;
var off = 0;

var texto = "";

var ultimoEvento;
var telaLigada = 0;
for(var id in counter.events){
    event = counter.events[id];
    var data = new Date(event.date);

    if(data.getDate() != 7) {
      continue;
    }

    var linha = formatar(data);
    linha = linha + " " + event.type;

    if(event.type == 'ACTION_SCREEN_ON') {
      on = on+1;
    }

    if(event.type == 'ACTION_SCREEN_OFF') {
      off = off+1;

      if(ultimoEvento != undefined) {
        if(ultimoEvento.type == 'ACTION_SCREEN_ON') {
          if(ultimoEvento.date < event.date) {
            var tempoTelaLigada = event.date - ultimoEvento.date;
            telaLigada = telaLigada + tempoTelaLigada;
            linha = linha + " duração:" + formatarMilisegundos(tempoTelaLigada);
          }
        }
      }

    }
    texto = texto + '\n' + linha;
    ultimoEvento = event;
}

texto = texto + "\n\nTEMPO TOTAL:";
texto = texto + formatarMilisegundos(telaLigada);
console.log(texto);
escrever(texto);




function formatar(date) {
  var dia = date.getDate();
  var mes = date.getMonth() + 1;
  var ano = date.getFullYear();
  var hora = date.getHours();
  var minuto = date.getMinutes();
  var segundo = date.getSeconds();
  var milisegundo = date.getMilliseconds();

  return dia + '/' + mes + '/' + ano + " " + hora + ':' + minuto + ':' + segundo + '.' +milisegundo;
}

function formatarMilisegundos(duration) {
  var milliseconds = parseInt((duration%1000)/100)
    , seconds = parseInt((duration/1000)%60)
    , minutes = parseInt((duration/(1000*60))%60)
    , hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

function escrever(texto) {
  fs = require('fs');
  fs.writeFile('log.txt', texto, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}
