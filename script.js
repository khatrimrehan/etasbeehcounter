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


/// --- COUNTER init (replace the old LOAD SAVED COUNT block) ---
let count = 0;
let countEL; // will be set after DOM loads

function saveCount() {
  localStorage.setItem('count', String(count));
}

function loadCount() {
  const saved = localStorage.getItem('count');
  if (saved !== null) {
    const n = parseInt(saved, 10);
    if (!Number.isNaN(n)) count = n;
  }
  if (countEL) countEL.textContent = count;
}

// wait until DOM is ready so elements exist
document.addEventListener('DOMContentLoaded', () => {
  // assign DOM refs (move these here so getElementById won't return null)
  changeMode = document.getElementById("changemode");
  lighT = document.getElementById("light");
  loGo = document.getElementById("logo");
  rSetBtn = document.getElementById("reset-btn");
  finGer = document.getElementById("fingeR");
  cliCked = document.getElementById("clicked");
  cliCcked = document.getElementsByClassName("finger-text");
  minUs = document.getElementById("hahaha");
  incrimenTAnywhere = document.getElementById("incanywhere");
  AnyWhere = document.getElementById("anywhere");

  // counter element + load saved value
  countEL = document.getElementById('count-el');
  loadCount();
});




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

  saveCount();
}
function darkmode() {
  loGo.src = "fluent--sparkle-16-regular (1).png"
  rSetBtn.src = "resetlogo.png"
  finGer.src =
    "streamline--one-finger-tap-remix.svg"
  var NAME = document.getElementById("changemode")
  NAME.className = "lightmod"

  saveCount();
}

let count = 0

function incrimentAnywhere() {
  
  count += 1
  countEL.textContent = count
  saveCount();
  
}

function countany() {
  
  count += 1
  countEL.textContent = count
  saveCount();
 
}


function minuses() {

  if (count > 0) {
    count -= 1

  }
  countEL.textContent = count
  saveCount();
}




function lineoNe() {
  count = -1
  countEL.textContent = 0
  saveCount();
}





