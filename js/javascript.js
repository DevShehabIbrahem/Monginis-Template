$(document).ready(function () {
  /* Dropdown-one*/

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

  /*box-model*/

  //apper && disapper boxmodel

  /***** quick-view button ******/
  var btn1 = $("#click1");
  var btn2 = $("#click2");
  var btn3 = $("#click3");
  var btn4 = $("#click4");
  var btn5 = $("#click5");
  /**/
  var btna = $("#click-a");
  var btnb = $("#clickb");
  var btnc = $("#clickc");
  var btnd = $("#clickd");
  var btne = $("#clicke");
  /**/
  var btna1 = $("#click-a1");
  var btna2 = $("#click-a2");
  var btna3 = $("#click-a3");
  var btna4 = $("#click-a4");
  var btna5 = $("#click-a5");
  /***** pop up hide sections ******/
  /*section one*/
  $(".box-model1").hide();
  $(".box-model2").hide();
  $(".box-model3").hide();
  $(".box-model4").hide();
  $(".box-model5").hide();
  /*section tow*/
  $(".box-model-a").hide();
  $(".box-model-b").hide();
  $(".box-model-c").hide();
  $(".box-model-d").hide();
  $(".box-model-e").hide();
  /*section three*/
  $(".box-model-a1").hide();
  $(".box-model-a2").hide();
  $(".box-model-a3").hide();
  $(".box-model-a4").hide();
  $(".box-model-a5").hide();

  /***** pop up show ******/
  btn1.click(function () {
    $(".box-model1").css("display", "block");
  });
  btn2.click(function () {
    $(".box-model2").css("display", "block");
  });
  btn3.click(function () {
    $(".box-model3").css("display", "block");
  });
  btn4.click(function () {
    $(".box-model4").css("display", "block");
  });
  btn5.click(function () {
    $(".box-model5").css("display", "block");
  });
  /*pop up show section tow*/
  btna.click(function () {
    $(".box-model-a").css("display", "block");
  });
  btnb.click(function () {
    $(".box-model-b").css("display", "block");
  });
  btnc.click(function () {
    $(".box-model-c").css("display", "block");
  });
  btnd.click(function () {
    $(".box-model-d").css("display", "block");
  });
  btne.click(function () {
    $(".box-model-e").css("display", "block");
  });
  /*pop up show section tow*/

  btna1.click(function () {
    $(".box-model-a1").css("display", "block");
  });
  btna2.click(function () {
    $(".box-model-a2").css("display", "block");
  });
  btna3.click(function () {
    $(".box-model-a3").css("display", "block");
  });
  btna4.click(function () {
    $(".box-model-a4").css("display", "block");
  });
  btna5.click(function () {
    $(".box-model-a5").css("display", "block");
  });
  //apper && disapper boxmodel
  /***** pop up hide button ******/
  var closebtn1 = $("#remove1");
  var closebtn2 = $("#remove2");
  var closebtn3 = $("#remove3");
  var closebtn4 = $("#remove4");
  var closebtn5 = $("#remove5");
  /***** pop up hide button ******/
  var closebtna = $("#removea");
  var closebtnb = $("#removeb");
  var closebtnc = $("#removec");
  var closebtnd = $("#removed");
  var closebtne = $("#removee");
  /***** pop up hide button ******/

  var closebtna1 = $("#remove-a1");
  var closebtna2 = $("#remove-a2");
  var closebtna3 = $("#remove-a3");
  var closebtna4 = $("#remove-a4");
  var closebtna5 = $("#remove-a5");

  /***** pop up close ******/
  closebtn1.click(function () {
    $(".box-model1").css("display", "none");
    console.log("done");
  });
  closebtn2.click(function () {
    $(".box-model2").hide();
    console.log("done");
  });
  closebtn3.click(function () {
    $(".box-model3").hide();
    console.log("done");
  });
  closebtn4.click(function () {
    $(".box-model4").hide();
    console.log("done");
  });
  closebtn5.click(function () {
    $(".box-model5").hide();
    console.log("done");
  });
  /***** pop up close ******/
  closebtna.click(function () {
    $(".box-model-a").css("display", "none");
    console.log("done");
  });
  closebtnb.click(function () {
    $(".box-model-b").hide();
    console.log("done");
  });
  closebtnc.click(function () {
    $(".box-model-c").hide();
    console.log("done");
  });
  closebtnd.click(function () {
    $(".box-model-d").hide();
    console.log("done");
  });
  closebtne.click(function () {
    $(".box-model-e").hide();
    console.log("done");
  });
  /***** pop up close ******/
  closebtna1.click(function () {
    $(".box-model-a1").css("display", "none");
    console.log("done");
  });
  closebtna2.click(function () {
    $(".box-model-a2").hide();
    console.log("done");
  });
  closebtna3.click(function () {
    $(".box-model-a3").hide();
    console.log("done");
  });
  closebtna4.click(function () {
    $(".box-model-a4").hide();
    console.log("done");
  });
  closebtna5.click(function () {
    $(".box-model-a5").hide();
    console.log("done");
  });

  //apper && disapper  quick-view
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
