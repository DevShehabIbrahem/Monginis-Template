var menuLeft = document.getElementById("cbp-spmenu-s1"),
  showLeft = document.getElementById("showLeft"),
  showLeftPush = document.getElementById("showLeftPush"),
  showRightPush = document.getElementById("showRightPush"),
  body = document.body;

showLeft.onclick = function () {
  classie.toggle(this, "active");
  classie.toggle(menuLeft, "cbp-spmenu-open");
  disableOther("showLeft");
};

function disableOther(button) {
  if (button !== "showLeft") {
    classie.toggle(showLeft, "disabled");
  }

  if (button !== "showLeftPush") {
    classie.toggle(showLeftPush, "disabled");
  }
  if (button !== "showRightPush") {
    classie.toggle(showRightPush, "disabled");
  }
}
