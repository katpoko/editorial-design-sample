console.log( '😀👍🍎' );

// GSAP library
// https://unpkg.co/gsap@3/dist/gsap.min.js

// ScrollTrigger plugin
// https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js

// Install & Activate Plugin
gsap.registerPlugin(ScrollTrigger);

// defaults
ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});

// Panel One
gsap.to(".one", {
  scrollTrigger: "one",
  backgroundColor: "red",
  duration: 2
});

// Panel Two
gsap.to(".two", {
  scrollTrigger: "two"
});

// Panel Three
gsap.to(".three p", {
  scrollTrigger: "three",
  letterSpacing: 0,
  duration: 5
});

// Panel Four
gsap.to(".four", {
  scrollTrigger: "four"
});

// Panel Five
gsap.to(".five", {
  scrollTrigger: "five"
});

// Panel Six
gsap.to(".six", {
  scrollTrigger: "six",
  translateX: 0,
  duration: 2
});

// Panel One
gsap.to(".one h1", {
  scrollTrigger: "one",
  color: "brown",
  duration: 3,
  rotate: 0,
  opacity: 1
});
