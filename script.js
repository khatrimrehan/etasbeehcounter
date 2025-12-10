let changeMode = document.getElementById("changemode")
let lighT = document.getElementById("light")
let loGo = document.getElementById("logo")
let rSetBtn=document.getElementById("reset-btn")
let finGer=document.getElementById("fingeR")

function lightmode() {

 loGo.src = "sparkel-dark.png"

 rSetBtn.src = "reset-dark.png"
 
 finGer.src = "finger-black.svg"

 var NAME = document.getElementById("changemode")
 
 NAME.className="lightmode"
}

function darkmode() {
 loGo.src = "fluent--sparkle-16-regular (1).png"

 rSetBtn.src = "resetlogo.png"
 
  finGer.src = 
"streamline--one-finger-tap-remix.svg" 
 
 var NAME = document.getElementById("changemode")
 
 NAME.className="lightmod"
}
