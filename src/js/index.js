// Custom Animation on Arrow Bar
function setArrowBar() {
    setTimeout(
      function() {
        var x = document.getElementById('arrow-bar');
        x.style.opacity = 1;
      }, 7000);
  }

setArrowBar();

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