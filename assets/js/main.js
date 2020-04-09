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
$(document).ready(function(){
console.log('documento pronto');

var btnL = $('.prev-btn');
var btnR = $('.next-btn');

btnL.click(function(){
  $('#slider .slider-img img').prev('img').addClass('active');
  $('#slider .slider-img img').next('img').removeClass('active');
  // $('#slider .slider-img img').next().addClass('active');
  console.log('hai cliccato a SX');
});

btnR.click(function(){
  $('#slider .slider-img img').prev('img').removeClass('active');
  $('#slider .slider-img img').next('img').addClass('active');
  console.log('hai cliccato a DX');
});











}); // ready
