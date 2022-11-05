//https://gist.github.com/toruta39/3127081


var hoverTriggerElement = document.querySelector(".dropdown_mode");

// add mouseover event listener to parentElement
hoverTriggerElement.onmouseover = function (event) {
  hoverTriggerElement.classList.add("fade-in");
  hoverTriggerElement.classList.remove("fade-out");
};

// add mouseout event listener to parentElement
hoverTriggerElemenet.onmouseout = function (event) {
  hoverTriggerElement.classList.add("fade-out");
  hoverTriggerElement.classList.remove("fade-in");
};




function changeStyle(){
  var element = document.getElementById("onBold");
  element.style.fontWeight = "bold";
}
function changeStyle(){
  var element = document.getElementById("onBold2");
  element.style.fontWeight = "bold";
}
function changeStyle(){
  var element = document.getElementById("onBold3");
  element.style.fontWeight = "bold";
}