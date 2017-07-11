// jQuery to collapse the navbar on scroll
function collapseNavbar() {
  var isIndex = $('body').hasClass('index') ? true : false;
  var collapsePoint = isIndex ? 500 : 110;

  if ($('.navbar').offset().top > collapsePoint) {
    $('.navbar-fixed-top').addClass('top-nav-collapse');
  } else {
    $('.navbar-fixed-top').removeClass('top-nav-collapse');
  }
  
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

