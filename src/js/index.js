// Custom Animation on Arrow Bar
function setArrowBar() {
    setTimeout(
      function() {
        var y = document.getElementById('arrow-bar-empty');
        y.style.opacity = 0;
        var x = document.getElementById('arrow-bar');
        x.style.opacity = 1;
      }, 8000);
  }

  if (document.getElementById('arrow-bar')) {
    setArrowBar();
  }

$("#arrow-bar").hover(function() {
  var y = document.getElementById('arrow-bar-empty');
  y.style.opacity = 0;
  var x = document.getElementById('arrow-bar');
  x.style.opacity = 1;
});

// Arrow Bar Action
$("#arrow-bar").click(function() {
  // Scroll down
  $('html,body').animate({
      scrollTop: $("#foco-nav").offset().top},
      1000);

  // Remove overflow
  $('body').css('overflow', 'visible');

  // Remove cover
  setTimeout(
    function() {
      $('#foco-intro').css('display', 'none');
    }, 1200);
    
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