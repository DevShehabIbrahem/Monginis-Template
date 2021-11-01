$(document).ready(function () {
  /* Dropdown -one*/

  $(".dropdown-one").on("mouseover", function () {
    $(".dropdown-menu-one").slideDown(200);
  });
  $(".dropdown-one").on("mouseleave", function () {
    $(".dropdown-menu-one").slideUp(200);
  });
  /* Dropdown-Tow */
  $(".dropdown-menu-tow").hide();
  $(".dropdown-tow").on("mouseover", function () {
    $(".dropdown-menu-tow").slideDown(200);
  });
  $(".dropdown-tow").on("mouseleave", function () {
    $(".dropdown-menu-tow").slideUp(200);
  });
  //   /* Start slideToggle */
  $("span.navbar-toggler-icon").click(function () {
    $(".collapse").slideToggle();
  });
  $(".booNavigation").css("  background-color", "#f0f");
  /*Carousel anchor*/

  // change link

  // change images
});

/* end  slicknav  nav Barplugin jquery*/

/*  End slideToggle */
