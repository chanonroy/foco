// Custom Animation on Arrow Bar
function setArrowBar() {
    setTimeout(
      function() {
        var x = document.getElementById('arrow-bar');
        x.style.opacity = 1;
      }, 7000);
  }

  if (document.getElementById('arrow-bar')) {
    setArrowBar();
  }

$("#arrow-bar").hover(function() {
  var x = document.getElementById('arrow-bar');
  x.style.opacity = 1;
});

// Arrow Bar Action
$("#arrow-bar").click(function() {
  $('html,body').animate({
      scrollTop: $("#feature").offset().top},
      'slow');
});


// NAVIGATION BAR
$(document).ready(function () {
  $(".navbar-toggle").on("click", function() {
      $(this).toggleClass("active");
  });
});

// SUPPORT TOGGLES
if (document.getElementById('support')) {
  $(".foco-accordion__toggle").on("click", function() {

      var expanded = $(this).attr("aria-expanded");
      var $image = $(this).find('.foco-accordion__icon');

      if (expanded == 'true') {
        $image[0].src = 'assets/SUPPORTCLOSED.svg';
      } else {
        $image[0].src = 'assets/SUPPORTOPEN.svg';
      }

  })
}