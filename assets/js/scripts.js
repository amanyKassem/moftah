$(document).ready(function () {
  // toggle menu
  $("nav .toggle").click(function () {
    $(".overlay").css({
      transform: "scaleX(1)",
    });

    $(".menu").addClass("ul-dir");
  });

  $("nav .overlay").click(function () {
    $(this).removeAttr("style");
    $(".menu").removeClass("ul-dir");
  });

  // toggle fav
  $(".toggle-bg").on("click", function () {
    $(this).toggleClass("bg-white btn-primary");
  });

  function initiateAnimation() {
    AOS.init({
      delay: 500, // values from 0 to 3000, with step 50ms
      duration: 900, // values from 0 to 3000, with step 50ms
      easing: "ease-out-back", // default easing for AOS animations
    });

    if ($(window).width() < 560) {
      AOS.init({
        once: true,
      });
    }
  }
  initiateAnimation();

  //scroll top
  var scrollButton = $("#scroll-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 700) {
      scrollButton.fadeIn(1000);
    } else {
      scrollButton.fadeOut(1000);
    }
  });

  //click to scroll top
  scrollButton.click(function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
