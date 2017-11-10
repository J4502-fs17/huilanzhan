$(document).ready(function() {
  $('.menu').click(function() {
    $('nav ul').slideToggle(500);
  });

  $(window).resize(function() {
    if (   $(window).width() >700) {
      $('nav ul').removeAttr('style');
    }
  });
});
