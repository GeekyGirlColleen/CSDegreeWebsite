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
    $("a").addClass("active");
	} else {
    // otherwise remove class.
		$("nav").removeClass("active");
    $("a").removeClass("active");
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
      }, 500, function () {
        window.location.hash = hash;
      });
    }
  });
