// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Smooth Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
      return false;
    }
  }
  });
});  

//Fade Out Text
$(window).on('scroll', function () {
    $('article > p, article > h1, article > h2, article > h3, article > h4, article > h5, article > span').each(function (index, item) {
      var st = $(window).scrollTop();
      st = $(window).scrollTop() - $(this).offset().top + 60;
      $(this).css({ 'opacity': (1.2 - st / 100) });
    });
});
