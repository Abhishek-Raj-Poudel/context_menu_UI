const contextMenu = document.querySelector(".context_menu");
shareMenu = contextMenu.querySelector(".share-menu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault(); //provent the default context menu form comming
  let x = e.offsetX,
    y = e.offsetY,
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    cmWidth = contextMenu.offsetWidth,
    cmHeight = contextMenu.offsetHeight;

  /**
   * if x is greater than window width = contextMenu witdth - shareMenu width
   * then show the share menu to the left else show it to the right
   */

  if (x > winWidth - cmWidth - shareMenu.offsetWidth) {
    shareMenu.style.left = "-200px";
  } else {
    shareMenu.style.left = "";
    shareMenu.style.right = "-200px";
  }

  /**
   * If x is greater then (window width-context Menu width) then
   * set the x value to window width - context width else to set x to
   * the offsetX. Same for Y
   */

  x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
  y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
});
