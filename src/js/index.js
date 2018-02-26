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

// if (document.getElementById('support')) {
//   $("foco-accordion__toggle").on("click", function() {
//       console.log(this);
//       var $image = $(this).find('foco-accordion__icon');
//       console.log($image);
//   })
// }