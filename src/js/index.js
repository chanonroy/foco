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
//   $(".foco-accordion__toggle").on("click", function() {

//       var $image = $(this).find('.foco-accordion__icon');
//       var open = $image.attr("open");

//       console.log(open);
      
//       if (open == true) {
//         $image[0].src = 'dist/assets/SUPPORTOPEN.svg';
//         $image[0].setAttribute('open', 'true')
//       } else {
//         $image[0].src = 'dist/assets/SUPPORTCLOSED.svg';
//         $image[0].setAttribute('open', 'false')
//       }

//   })
// }