$(document).ready(function () {
  /* Dropdown-one*/
  var appendthis = "<div class='modal-overlay js-modal-close'></div>";

  $("a[data-modal-id]").click(function (e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr("data-modal-id");
    $("#" + modalBox).fadeIn($(this).data());
  });

  $(".js-modal-close, .modal-overlay").click(function () {
    $(".modal-box, .modal-overlay").fadeOut(800, function () {
      $(".modal-overlay").remove();
    });
  });

  $(window).resize(function () {
    var scrol = $(window).scrollTop();
    $(".modal-box").css({
      top: 100 + "%" - scrol,
      left: 15 + "%" - scrol,
    });
  });

  $(window).resize();

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

  //apper && disapper  quick-view btn
  $("ul li .img").hover(function () {
    $(".quick-view", this).css("display", "block");
  });
  $("ul li .img ").mouseleave(function () {
    $(".quick-view", this).css("display", "none");
  });

  /*scrool*/
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      $(".scrol").show();
    } else $(".scrol").hide();
  });
  $(".scrol").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
//apper && disapper  quick-view

console.log(close);

/* end  slicknav  nav Barplugin jquery*/

/*  End slideToggle */
