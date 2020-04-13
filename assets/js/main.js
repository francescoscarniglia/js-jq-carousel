// Esercizio di oggi: Slider
// Descrizione:
// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni
// Lo slider prevederà due frecce (icone) che permettono di scorrere
// tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle
// frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last per capire quali sono la
// prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è
// l’immagine attuale da visualizzare nello slider
// Ricordatevi di .hasClass('my-class') per il controllo delle
// classe applicata a un elemento
// Super importanti anche prev() e next()
// Ricordate il $(document).ready() :wink:
// dichiaro una var booleana, mi serve come STOP per perfmare lo slider
var semaforo = "verde";

$(document).ready(function() {
console.log('documento pronto');



// invoco la funzione evento sulle frecce
addEventArrow ();



}); // ready

// funzione per le frecce
function addEventArrow (){
  $('#arrow-l').click(clickArrowLeft);
  $('#arrow-r').click(clickArrowRight);
}

// freccia sinistra e stato del semafaforo
function clickArrowLeft() {
  console.log('Hai cliccato a sX');
  if(semaforo == "verde") {
    semaforo = "rosso";
    moveLeft();
  }
}

function clickArrowRight() {
  console.log('Hai cliccato a dX');
  if(semaforo == 'verde'){
    semaforo = "rosso";
    moveRight();
  }
}

function moveLeft(){
    console.log('muovo a sx');
}


function moveRight(){
    console.log('muovo a Dx');
}




// old project (in (document).ready)
// var btnL = $('.prev-btn');
// var btnR = $('.next-btn');
// var firstImg = $('.first');
// var lastImg = $('.last');
// var imgActive = $('.active');

// var active = $('se');
// var firstImg = $('.slider-img #img-1');
// var lastImg = $('.slider-img #img-3');
//
// if(firstImg == active){
//     console.log('img- 1');
// }else if(lastImg == active){
//   console.log('ultima img');
// } else {
//   console.log('tra 1 e 2');
// }

// btnL.click(function(){
//
//   // $('#slider .slider-img img').next().addClass('active');
//   console.log('hai cliccato a SX');
// });
//
// btnR.click(function(){
//
//   $('#slider .slider-img img').next('img').addClass('active');
//   console.log('hai cliccato a DX');
// });
