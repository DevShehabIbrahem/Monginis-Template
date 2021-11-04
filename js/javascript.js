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

  /*box-model*/

  //apper && disapper boxmodel
  /***** quick-view button ******/
  var btn1 = $("#click1");
  var btn2 = $("#click2");
  var btn3 = $("#click3");
  var btn4 = $("#click4");
  var btn5 = $("#click5");
  /***** pop up hide sections ******/
  $(".box-model1").hide();
  $(".box-model2").hide();
  $(".box-model3").hide();
  $(".box-model4").hide();
  $(".box-model5").hide();
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
  //apper && disapper boxmodel
  /***** pop up hide button ******/
  var closebtn1 = $("#remove1");
  var closebtn2 = $("#remove2");
  var closebtn3 = $("#remove3");
  var closebtn4 = $("#remove4");
  var closebtn5 = $("#remove5");
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

  //apper && disapper  quick-view
  $("ul li .img").hover(function () {
    $(".quick-view", this).css("display", "block");
  });
  $("ul li .img ").mouseleave(function () {
    $(".quick-view", this).css("display", "none");
  });
});
//apper && disapper  quick-view

console.log(close);

/* end  slicknav  nav Barplugin jquery*/

/*  End slideToggle */
