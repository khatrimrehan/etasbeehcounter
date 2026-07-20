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
let lightThemeLogo = document.getElementById("lightthemelogo")
let linEoNe = document.getElementById("reset-btn")
let aboutUs = document.getElementById("about-us")
let backArrow = document.getElementById("backarrow")
const htry = document.querySelector(".History")
const hist = document.querySelector(".histus")
const time = document.querySelector(".time")
const historyBar = document.querySelector(".his-comp")
const rName = document.querySelector(".recit-name")
const inptName = document.querySelector("input")
const rstLine = document.querySelector(".line1")
const del = document.querySelector("his-del")
const cliCk = document.querySelector(".recit")



cliCk.addEventListener("submit", (e) => {
  e.preventDefault();
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  let name = inptName.value

  const uniqueId = `cnt-${Date.now()}`;
  activeHistoryId = uniqueId;

    historyBar.innerHTML += `
       <div class="his-list">

        <div class="his-lft">

          <div class="recit-name">
            ${name}
          </div>
          <div class="time" id="clock-display">
          ${currentTime}
          </div>

        </div>

        <div class="his-rght">
          <div class="counts">
            <div class="cnt" id="${uniqueId}">
              ${count}
            </div>
          </div>
          <div class="his-delt" >
            <i class="ri-delete-bin-fill"></i>
          </div>
        </div>

      </div>`
  
  inptName.blur()

})


// inptName.addEventListener("keydown", (e, index) => {
  // const currentTime = new Date().toLocaleTimeString([], {
  //   hour: '2-digit',
  //   minute: '2-digit'
  // });

//   let name = inptName.value



//   if (e.key === "Enter") {

//     console.log(name);
//     inptName.blur();

//   }
//   else {
//     return
//   }

  // const uniqueId = `cnt-${Date.now()}`;
  // activeHistoryId = uniqueId;


  // historyBar.innerHTML += `
  //      <div class="his-list">

  //       <div class="his-lft">

  //         <div class="recit-name">
  //           ${name}
  //         </div>
  //         <div class="time" id="clock-display">
  //         ${currentTime}
  //         </div>

  //       </div>

  //       <div class="his-rght">
  //         <div class="counts">
  //           <div class="cnt" id="${uniqueId}">
  //             ${count}
  //           </div>
  //         </div>
  //         <div class="his-delt" >
  //           <i class="ri-delete-bin-fill"></i>
  //         </div>
  //       </div>

  //     </div>`



// });

historyBar.addEventListener("click", (e) => {

  if (e.target.closest(".his-delt")) {
    e.target.closest(".his-list").remove()
  }

})

htry.addEventListener("click", () => {
  menuBar.style.transform = "translate(120%) scale(0.75)";
  hist.style.transform = "translate(0%)"
})

const ignoreElements = [rSetBtn, finGer, loGo, lighT, cliCked, minUs, incrimenTAnywhere, menuBar, AnyWhere].filter(Boolean);
const ignoreClassElements = Array.from(cliCcked || []).filter(Boolean);




function vibrate() {

  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
}
function lightmode() {

  if (isOpen) {
    loGo.src = "sparkel-dark.png"
    rSetBtn.src = "reset-dark.png"
    finGer.src = "finger-black.svg"
    lightThemeLogo.src = "sun.png"
    lighT.textContent = "Dark Theme : Off"
    var NAME = document.getElementById("changemode")
    NAME.className = "lightmode"
  }
  else {
    loGo.src = "fluent--sparkle-16-regular (1).png"
    rSetBtn.src = "resetlogo.png"
    finGer.src =
      "streamline--one-finger-tap-remix.svg"
    lightThemeLogo.src = "moon.png"

    lighT.textContent = "Dark Theme : On"

    var NAME = document.getElementById("changemode")
    NAME.className = "lightmod"
  }

  isOpen = !isOpen
}

let count = 0

let countEL = document.getElementById("count-el")


let savedCount = localStorage.getItem("tasbeehCount");

if (savedCount !== null) {
  count = parseInt(savedCount);
  countEL.textContent = count;
}

function incrimentAnywhere() {
  count += 1
  countEL.textContent = count


  if (activeHistoryId) {
    const activeHistoryEl = document.getElementById(activeHistoryId);
    if (activeHistoryEl) {
      activeHistoryEl.textContent = count;
    }
  }


  localStorage.setItem("tasbeehCount", count);
}

function countany() {
  count += 1
  countEL.textContent = count

  if (activeHistoryId) {
    const activeHistoryEl = document.getElementById(activeHistoryId);
    if (activeHistoryEl) {
      activeHistoryEl.textContent = count;
    }
  }

  localStorage.setItem("tasbeehCount", count);

}

function lineoNe() {
  count = 0
  countEL.textContent = 0

  activeHistoryId = null;

  inptName.value = ""

  localStorage.setItem("tasbeehCount", count);

  linEoNe.style.transform += "rotate(360deg)"
}



let isOpen = false;
let isOpn = false;
function menubtn() {




  if (isOpen) {
    menuBar.style.transform = "translate(120%) scale(0.75)";
    menuBar.style.display = "flex"

  } else {
    menuBar.style.transform = "translate(0%)";
  }
  isOpen = !isOpen;

}
function about() {
  menuBar.style.transform = "translate(120%) scale(0.75)";
  aboutUs.style.transform = "translate(0%)"
}

function back() {
  // menuBar.style.transform = "translate(0%)";
  aboutUs.style.transform = "translate(-130%) scale(0.75)"
  hist.style.transform = "translate(-130%) scale(0.75)"
}

function Home() {
  aboutUs.style.transform = "translate(-130%) scale(0.75)";
  menuBar.style.transform = "translate(120%) scale(0.75)";
}


