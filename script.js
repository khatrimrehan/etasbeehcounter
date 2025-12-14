let changeMode = document.getElementById("changemode")
let lighT = document.getElementById("light")
let loGo = document.getElementById("logo")
let rSetBtn = document.getElementById("reset-btn")
let finGer = document.getElementById("fingeR")
let cliCked = document.getElementById("clicked")
let cliCcked = document.getElementsByClassName("finger-text")
let minUs = document.getElementById("hahaha")
let incrimenTAnywhere = document.getElementById("incanywhere")
let AnyWhere = document.getElementById("anywhere")
let menuBar = document.getElementById("menubar")




const ignoreElements = [rSetBtn, finGer, loGo, lighT, cliCked, minUs, incrimenTAnywhere, AnyWhere].filter(Boolean);
const ignoreClassElements = Array.from(cliCcked || []).filter(Boolean);




function vibrate() {
  if (navigator.vibrate) {
    console.log("Supported: " + navigator.vibrate([100]));
  } else {
    console.log("Vibration NOT supported");
  }
  if (navigator.vibrate) {
    navigator.vibrate(40);
  }
}
function lightmode() {
  loGo.src = "sparkel-dark.png"
  rSetBtn.src = "reset-dark.png"
  finGer.src = "finger-black.svg"
  var NAME = document.getElementById("changemode")
  NAME.className = "lightmode"
}
function darkmode() {
  loGo.src = "fluent--sparkle-16-regular (1).png"
  rSetBtn.src = "resetlogo.png"
  finGer.src =
    "streamline--one-finger-tap-remix.svg"
  var NAME = document.getElementById("changemode")
  NAME.className = "lightmod"
}

let count = 0

let countEL = document.getElementById("count-el")

function incrimentAnywhere() {
  
  count += 1
  countEL.textContent = count
  
}

function countany() {
  
  count += 1
  countEL.textContent = count
 
}


function minuses() {

  if (count > 0) {
    count -= 1 

  }
countEL.textContent = count
}




function lineoNe() {
  count = 0
  countEL.textContent = 0
}

let isOpen = false;

function menubtn() {

  if (isOpen){
    menuBar.style.transform = "translateX(120%)";
  } else  {
    menuBar.style.transform = "translateX(-10%)";
    }
  
  isOpen = !isOpen;
}





