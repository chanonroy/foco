// Custom Animation on Arrow Bar
function setArrowBar() {
    setTimeout(
      function() {
        var y = document.getElementById('arrow-bar-empty');
        y.style.opacity = 0;
        var x = document.getElementById('arrow-bar');
        x.style.opacity = 1;
      }, 4000);
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

window.addEventListener('scroll', function(e) {
  var isBelowTop = $(window).scrollTop() > 0;
  if (isBelowTop) {
    $('body').removeClass("foco-scroll-lock");
    setTimeout(
      function() {
        $('#foco-intro').css('display', 'none');
      }, 1200);
  }
});

// Arrow Bar Action
function scrollDownArrowBar() {
  $('html,body').animate({
    scrollTop: $("#main").offset().top},
    1000);

  // Remove overflow
  $('body').removeClass("foco-scroll-lock");

  // Remove cover
  setTimeout(
    function() {
      $('#foco-intro').css('display', 'none');
    }, 1300);
}

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