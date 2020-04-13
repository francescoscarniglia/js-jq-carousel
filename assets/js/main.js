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

// questa variabile mi serve per START / STOP
var semaforo = "verde";

$(document).ready(function() {
console.log('documento pronto');
$(document).on("keyup" , muoviSlider);


// invoco la funzione evento sulle frecce
addEventArrow ();


}); // ready

// funzione per le frecce
function addEventArrow (){
  $('#arrow-l').click(clickArrowLeft);
  $('#arrow-r').click(clickArrowRight);
}

// freccia sinistra
function clickArrowLeft() {
  console.log('Click Sx');
  if(semaforo == "verde") {
    semaforo = "rosso";
    muoviASinistra();
  }
}

// freccia destra
function clickArrowRight() {
  console.log('Click  Dx');
	if (semaforo == "verde") {
    semaforo = "rosso";
	   muoviADestra();
	}
}

function muoviADestra()
{
	console.log("MuovoADestra...");
  //per muovere a destra lo slider devo ricavare il valore del margine sinistro e trasformarlo in un valore numerico
	var posizioneInPixel = $("#main-content #slider #slide_img").css("margin-left");
	var posizioneInNumeri = parseInt(posizioneInPixel);
	console.log("Posizione = " + posizioneInPixel);
	console.log("Posizione = " + posizioneInNumeri);

  // mi serve un contenitore entro un certo limite per capire quando fermare lo slider
	var larghezza_gallery = parseInt($("#main-content #slider").css("width"));
	var numero_immagini = $ ("#main-content #slider #slide_img li").length;
	var limite_widht = (larghezza_gallery*numero_immagini) + larghezza_gallery;
   console.log(larghezza_gallery);
   console.log(numero_immagini);
   console.log(limite_widht);

   // se il margin-left  è uguale al contenitore
	if(posizioneInNumeri == limite_widht)
	{
		console.log("Non muovere la Gallery");
		semaforo = "verde";
	}
//altrimenti muovi la galleria
	else
	{
		console.log("Muovi la Gallery");
		var nuovaPosizione = posizioneInNumeri - 960; // margin left - la width di un elemento li
		var nuovaPosizioneInPixel = nuovaPosizione + "px"; // nuova posizione (in pixel + 'px')
		var duration = 2 * 1000; // animazione
		$ ("#main-content #slider #slide_img").animate(
		{
		"margin-left" : nuovaPosizioneInPixel
		}, duration, animazione_finita);

	 }
}


function muoviASinistra(){

  console.log("MuovoASinistra...");
  //per muovere a destra lo slider devo ricavare il valore del margine sinistro e trasformarlo in un valore numerico
	var posizioneInPixel = $("#main-content #slider #slide_img").css("margin-left");
	var posizioneInNumeri = parseInt(posizioneInPixel);
	console.log("Posizione = " + posizioneInPixel);
	console.log("Posizione = " + posizioneInNumeri);

  // mi serve un contenitore entro un certo limite per capire quando fermare lo slider
	var larghezza_gallery = parseInt($("#main-content #slider").css("width"));
	var numero_immagini = $ ("#main-content #slider #slide_img li").length;
	var limite_widht = (larghezza_gallery*numero_immagini) + larghezza_gallery;
   console.log(larghezza_gallery);
   console.log(numero_immagini);
   console.log(limite_widht);

   // se il margin-left è uguale a 0 in questo caso
	if(posizioneInNumeri == 0)
	{
		console.log("Non muovere la Gallery");
		semaforo = "verde";
	}
//altrimenti muovi la galleria
	else
	{
		console.log("Muovi la Gallery");
		var nuovaPosizione = posizioneInNumeri + 960; // margin left - la width di un elemento li
		var nuovaPosizioneInPixel = nuovaPosizione + "px"; // nuova posizione (in pixel + 'px')
		var duration = 2 * 1000; // animazione
		$ ("#main-content #slider #slide_img").animate(
		{
		"margin-left" : nuovaPosizioneInPixel
		}, duration, animazione_finita);

	 }

}


function animazione_finita() {
	console.log("Fine animazione")
	semaforo = "verde";
}

function muoviSlider(e) {
    console.log(e.which); // scopro il numero delle frecce
    if(e.which == 37) {
      console.log('freccia sx');
      muoviASinistra()
    } if(e.which == 39) {
      console.log('Freccia dx');
      muoviADestra()
    }
}


// freccia sinistra
// function clickArrowLeft() {
//   console.log('Click Sx');
//
//   if ($("#slider .slider-list li").hasClass("first active")){
//       $('.last').addClass('active');
//   } else if($("#slider .slider-list li").hasClass("active last")) {
//     $('#slider .slider-list li .first').addClass('active');
//   }else{
//     $('#slider .slider-list li').next('li').removeClass('active');
//     $('#slider .slider-list li').prev('li').addClass('active');
//   }
// }
//
// // freccia destra
// function clickArrowRight() {
//   console.log('Click  Dx');
//   $('#slider .slider-list li').prev('li').removeClass('active');
//   $('#slider .slider-list li').next('li').addClass('active');
// }



// old project
//$(document).ready(function() {
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
//}); // ready
