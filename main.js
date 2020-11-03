$(document).ready(function(){

  /* Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider */

  $('.prev').click(prevImage);
  $('.next').click(nextImage);


  /* Per scorrere le immagini permettere anche l'uso delle frecce sinistra e destra della tastiera ( e' un evento diverso dal click, quale? ) */

  $(document).keydown(
    function(){
      if(event.which === 37){ //left arrow
        prevImage();
      } else if (event.which === 39) {  //right arrow
        nextImage();
      }
    })



})


// https://api.jquery.com/event.which/


/* Bonus:
Clicchiamo sui pallini e mostriamo l'immagine corrispondente
Generiamo i pallini con JS */
