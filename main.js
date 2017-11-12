// Makes icon bounce
$(document).ready(function() {
  $("#Circle").addClass("animated bounce");
});

// Navigation bar changing color and background
$(window).on("scroll", function() {
  var position = $("#Home").offset();

  // If the top of the screen is greater than the #begin element.
  if ($(window).scrollTop() > position.top + 0.005) {
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
    $(".info1").addClass('activateInfo');

  }, function() {
    $("#Port1").removeClass('transition');
    $(".info1").removeClass('activateInfo');
  });
  // Adding transition to port2
  $("#Port2").hover(function() {
    $("#Port2").addClass('transition');
    $(".info2").addClass('activateInfo');

  }, function() {
    $("#Port2").removeClass('transition');
    $(".info2").removeClass('activateInfo');
  });
  // Adding transition to port3
  $("#Port3").hover(function() {
    $("#Port3").addClass('transition');
    $(".info3").addClass('activateInfo');

  }, function() {
    $("#Port3").removeClass('transition');
    $(".info3").removeClass('activateInfo');
  });
});

// Showing tabs for Interest div
$(".tab-list").on("click", ".tab", function(e) {
    e.preventDefault();

    $(".tab").removeClass("active");
    $(".tab-content").removeClass("show");
    $(this).addClass("active");
    $($(this).attr("href")).addClass("show");
});

// Making the phone "buzz"
$(window).on("scroll", function() {
  var position = $("#Home").offset();

  // If the top of the screen is slightly less than the #Contact element.
  if ($(window).scrollTop() > $("#Contact").offset().top - 70) {
    // activate class.
    $("#PhoneIcon").addClass("animated shake");
  } else {
    // otherwise remove class.
    $("#PhoneIcon").removeClass("animated shake");
  };
});

// Toggle accordion
$(".accordion").on("click", ".accordion-header", function() {
   $(this).toggleClass("active").next().slideToggle();
});
