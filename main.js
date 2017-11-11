// Makes icon bounce
$(document).ready(function() {
  $("#circle").addClass("animated bounce");
});

// Navigation bar changing color and background

$(window).on("scroll", function() {
  var position = $("#Home").offset();

  // If the top of the screen is greater than the #begin element.
  if ($(window).scrollTop() > position.top + 0.005) { // height of navigation.
    // activate class.
    $("nav").addClass("active");
    $("nav a").addClass("active");
  } else {
    // otherwise remove class.
    $("nav").removeClass("active");
    $("nav a").removeClass("active");
  };
});

// Scrolling to divs from navbar
$("nav a").on("click", function(event) {
  if (this.hash === "#Home") {
    $("html, body").animate({
      scrollTop: $("html, body").offset().top
    }, 500);

  } else if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $("html, body").animate({
      scrollTop: $(hash).offset().top
    }, 500, function() {
      window.location.hash = hash;
    });
  }
});

// Activating the modals
$(".open.mufy").on("click", function() {
  $(".overlay, .financial1").addClass("active");
});

$(".open.monash").on("click", function() {
  $(".overlay, .financial2").addClass("active");
});

$(".close.mufy").on("click", function() {
  $(".overlay, .financial1").removeClass("active");
});

$(".close.monash").on("click", function() {
  $(".overlay, .financial2").removeClass("active");
});

// Hover to enlarge images
$(document).ready(function() {
  // Adding transition to port1
  $("#Port1").hover(function() {
    $("#Port1").addClass('transition');

  }, function() {
    $("#Port1").removeClass('transition');
  });
  // Adding transition to port2
  $("#Port2").hover(function() {
    $("#Port2").addClass('transition');

  }, function() {
    $("#Port2").removeClass('transition');
  });
  // Adding transition to port3
  $("#Port3").hover(function() {
    $("#Port3").addClass('transition');

  }, function() {
    $("#Port3").removeClass('transition');
  });
});

// Scalling Images
$(window).load(function(){
 $('.portfolio').find('img').each(function(){
  var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
  $(this).addClass(imgClass);
 })
})
