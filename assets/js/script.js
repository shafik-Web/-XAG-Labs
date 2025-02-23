
$(document).ready(function () {
  //nav bar js code
  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("active"); // Toggle active class on hamburger icon
    $(".menu_mobile").toggleClass("active"); // Toggle active class on mobile menu
  });
  $(".menu_mobile").click(function () {
    $(".hamburger").removeClass("active");
    $(".menu_mobile").removeClass("active");
    $(this).removeClass("active");
  });

  /* This JavaScript(jQuery) code is setting up functionality for a webpage.
 Here's a breakdown of what it does: */

  $(function () {
    "use strict";

    // Function to refresh Slick slider
    function refreshSlick() {
      $(".teamSlider").slick("refresh");
    }

    // Give Active Class
    $(".title").first().addClass("active");
    $(".navLi a").first().addClass("active");

    $(".content").hide();

    // Show First content
    $(".content").first().show();

    // Show content On .navLi a Click
    $(".navLi a").click(function (e) {
      e.preventDefault();
      var targetTitle = $(this).attr("data");
      $(".navLi a").removeClass("active");
      $(".title").removeClass("active");
      $(".content").hide();
      $(this).addClass("active");
      $("." + targetTitle).addClass("active");
      $("." + targetTitle)
        .next(".content")
        .show();
      // .show("fast"); // uncomment this line to show the content with animation
      refreshSlick(); // Refresh the slider
    });

    // Show content On .title Click
    $(".title").click(function () {
      $(".title").removeClass("active");
      $(".navLi a").removeClass("active");
      $(".content").hide();
      $(this).addClass("active");
      $(this).next(".content")
      .show();
      // .show("fast"); // uncomment this line to show the content with animation

      var targetData = $(this).attr("class").split(" ")[1]; // Get the title class to match with navLi
      $("a[data='" + targetData + "']").addClass("active"); // Add active to the corresponding navLi link
      refreshSlick(); // Refresh slick slider
    });
  });
});

// -------------Team slider-----------
/* This code block is initializing a Slick slider for a section with the class "teamSlider" on the
webpage. The Slick slider is a popular jQuery plugin for creating responsive and customizable
sliders/carousels. */

$(document).ready(function () {
  $(".teamSlider").slick({
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
      // responsive slick slider
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
