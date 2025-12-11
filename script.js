let changeMode = document.getElementById("changemode")
let lighT = document.getElementById("light")
let loGo = document.getElementById("logo")
let rSetBtn = document.getElementById("reset-btn")
let finGer = document.getElementById("fingeR")
let cliCked = document.getElementById("clicked")
let cliCcked = document.getElementsByClassName("finger-text")
let minUs = document.getElementById("hahaha")
let incrimenTAnywhere = document.getElementById("incanywhere")


const ignore = [rSetBtn, finGer, loGo, lighT, cliCked, minUs, cliCcked, incrimenTAnywhere];

document.addEventListener("click", (e) => {
  if (ignore.includes(e.target)) {
    return;
  }
});

function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}



function minuses() {
  if (count > 0) {
    count -= 1
  }
  countEL.textContent = count
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
if (count > 1) {
  minUs.style.opacity = "0.8"
}  

if (count < 1) {
  minUs.style.opacity = "0.4"
}  

let countEL = document.getElementById("count-el")




function incrimentAnywhere() {
  count += 1
  countEL.textContent = count
}



function lineoNe() {
  countEL.textContent = 0
  count = -1
}


