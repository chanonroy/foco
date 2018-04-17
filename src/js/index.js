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
    $('#foco-intro').animate({top: "-125vh"}, 0);
  }
});

// Arrow Bar Action
function scrollDownArrowBar() {
  $('#foco-intro').animate({top: "-125vh"}, 1500);
  $('body').removeClass("foco-scroll-lock");
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