//https://gist.github.com/toruta39/3127081


var hoverTriggerElemenet = document.querySelector(".dropdown_mode");

// add mouseover event listener to parentElement
hoverTriggerElemenet.onmouseover = function (event) {
  hoverTriggerElemenet.classList.add("fade-in");
  hoverTriggerElemenet.classList.remove("fade-out");
};

// add mouseout event listener to parentElement
hoverTriggerElemenet.onmouseout = function (event) {
  hoverTriggerElemenet.classList.add("fade-out");
  hoverTriggerElemenet.classList.remove("fade-in");
};