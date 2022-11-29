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



// var element1 = document.getElementById("menu_item1");
// var element2 = document.getElementById("menu_item2");
// var element3 = document.getElementById("menu_item3");

// function changeStyle(){
//   console.log('change style');
//   // example of adding a CSS style to the text 
//   // element1.classList.add("font1-bold");
//   element1.style.fontWeight = "bolder";
//   element2.style.fontWeight = "normal";
//   element3.style.fontWeight = "normal";
// }
// function changeStyle2(){
//   console.log('change style');
//   element2.style.fontWeight = "bolder";
//   element1.style.fontWeight = "normal";
//   element3.style.fontWeight = "normal";
// }
// function changeStyle3(){
//   console.log('change style');
//   element3.style.fontWeight = "bolder";
//   element1.style.fontWeight = "normal";
//   element2.style.fontWeight = "normal";
// }


const sampleTextObj = document.querySelector(".sampleText");

const menuItem1Obj = document.querySelector("#menu_item1");
const boldFont1Obj = document.querySelector(".boldFont1");

menuItem1Obj.addEventListener("click", () => {
  // console.log('THIS WORKS for Quicksand');
  boldFont1Obj.classList.add("font1-be-bold");
  boldFont2Obj.classList.remove("font2-be-bold");
  boldFont3Obj.classList.remove("font3-be-bold");
  sampleTextObj.classList.remove("opensans-font");
  sampleTextObj.classList.remove("roboto-font");
  sampleTextObj.classList.add("quicksand-font");
});


const menuItem2Obj = document.querySelector("#menu_item2");
const boldFont2Obj = document.querySelector(".boldFont2");

menuItem2Obj.addEventListener("click", () => {
  // console.log('THIS WORKS for Open');
  boldFont2Obj.classList.add("font2-be-bold");
  boldFont1Obj.classList.remove("font1-be-bold");
  boldFont3Obj.classList.remove("font3-be-bold");
  sampleTextObj.classList.remove("quicksand-font");
  sampleTextObj.classList.remove("roboto-font");
  sampleTextObj.classList.add("opensans-font");
});


const menuItem3Obj = document.querySelector("#menu_item3");
const boldFont3Obj = document.querySelector(".boldFont3");

menuItem3Obj.addEventListener("click", () => {
  // console.log('THIS WORKS for Roboto');
  boldFont3Obj.classList.add("font3-be-bold");
  boldFont1Obj.classList.remove("font1-be-bold");
  boldFont2Obj.classList.remove("font2-be-bold");
  sampleTextObj.classList.remove("opensans-font");
  sampleTextObj.classList.remove("quicksand-font");
  sampleTextObj.classList.add("roboto-font");
});


const resetTextObj = document.querySelector(".reset");

resetTextObj.addEventListener("click", () => {
  sampleTextObj.classList.remove("quicksand-font");
  sampleTextObj.classList.remove("opensans-font");
  sampleTextObj.classList.remove("roboto-font");
})






// const DyslexicButton = document.querySelector("#onBold");
// const DyslexicFont = document.querySelector(".font1");

// DyslexicButton.addEventListener("click", () => {
//   DyslexicFont.classList.toggle("be-bold");
// });



// const sampleTextObj = document.querySelector("boldFont1");
// sampleTextObj.addEventListener("click", () => {
//   console.log("sample text clicked on");
//   sampleTextObj.classList.toggle("fontChange1");
// });