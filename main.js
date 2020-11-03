$(document).ready(function(){

  var activeImage = $('img.active');

  $('.prev').click(
    function(){
      // scorrimento immagini
      var activeImage = $('img.active');
      var firstImage = $('img.first');
      var lastImage = $('img.last');

      activeImage.removeClass("active");
      if (activeImage.hasClass("first")) {
        lastImage.addClass("active");
      } else {
        activeImage.prev().addClass("active");
      }

      // scorrimento pallini
      var activeDot = $(".nav i.active");
      var firstDot = $(".nav i.first");
      var lastDot = $(".nav i.last");

      activeDot.removeClass("active");
      if (activeDot.hasClass("first")) {
        lastDot.addClass("active");
      } else {
        activeDot.prev().addClass("active");
      }
  });

  $('.next').click(
    function(){

      // scorrimento immagini
      var activeImage = $('img.active');
      var firstImage = $('img.first');
      var lastImage = $('img.last');

      activeImage.removeClass("active");
      if (activeImage.hasClass("last")) {
        firstImage.addClass("active");
      } else {
        activeImage.next().addClass("active");
      }

      // scorrimento pallini
      var activeDot = $(".nav i.active");
      var firstDot = $(".nav i.first");
      var lastDot = $(".nav i.last");

      activeDot.removeClass("active");
      if (activeDot.hasClass("last")) {
        firstDot.addClass("active");
      } else {
        activeDot.next().addClass("active");
      }
  });


})
