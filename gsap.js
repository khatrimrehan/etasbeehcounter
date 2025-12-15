gsap.fromTo(
  ".container",
  { autoAlpha: 1 },
  {
  autoAlpha: 0,
  duration: 0.5,
  delay: 6,
}
);

gsap.fromTo(
    ".logo-name",
    {
        y: 50,
        autoAlpha: 0,
    },
    {
        y: 0,
        autoAlpha: 1,
        duration: 2,
        delay: 0.5,
    }
);

let cnT = document.getElementById("cnt")


    
