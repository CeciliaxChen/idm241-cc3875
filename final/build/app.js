//https://gist.github.com/toruta39/3127081


var hoverTriggerElement = document.querySelector(".dropdown_mode");

// add mouseover event listener to parentElement
hoverTriggerElement.onmouseover = function (event) {
  hoverTriggerElement.classList.add("fade-in");
  hoverTriggerElement.classList.remove("fade-out");
};

// add mouseout event listener to parentElement
hoverTriggerElement.onmouseout = function (event) {
  hoverTriggerElement.classList.add("fade-out");
  hoverTriggerElement.classList.remove("fade-in");
};



// var element1 = document.getElementById("onBold");
// var element2 = document.getElementById("onBold2");
// var element3 = document.getElementById("onBold3");

// function changeStyle(){
//   console.log('change style');
//   // example of adding a CSS style to the text 
//   // element1.classList.add("font1-bold");
//   element1.style.fontWeight = "bolder";
//   element2.style.fontWeight = "normal";
//   element3.style.fontWeight = "normal";
// }
// function changeStyle2(){
//   element2.style.fontWeight = "bolder";
//   element1.style.fontWeight = "normal";
//   element3.style.fontWeight = "normal";
// }
// function changeStyle3(){
//   element3.style.fontWeight = "bolder";
//   element1.style.fontWeight = "normal";
//   element2.style.fontWeight = "normal";
// }



// const sampleTextObj = document.querySelector("#sampleText");
// const boldFontObj = document.querySelector(".boldFont");

// sampleTextObj.addEventListener("click", () => {
//   boldFontObj.classList.toggle("be-bold");
// });


const menuItem1Obj = document.querySelector("#menu_item1");
const boldFont1Obj = document.querySelector(".boldFont1");

menuItem1Obj.addEventListener("click", () => {
  console.log('THIS WORKS');
  boldFont1Obj.classList.toggle("font1-be-bold");
});






// const DyslexicButton = document.querySelector("#onBold");
// const DyslexicFont = document.querySelector(".font1");

// DyslexicButton.addEventListener("click", () => {
//   DyslexicFont.classList.toggle("be-bold");
// });