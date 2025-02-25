gsap.to("#div01", {
  opacity: 1,
  delay: 0.3,
});
gsap.from("#text1", {
  color: "grey",
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

gsap.to("#text1", {
  color: "gray",
  duration: 2,
  repeat: -1,
  yoyo: true,
});

gsap.to("#glow1", {
  duration: 0.8,
  boxShadow: "0px 0px 20px 10px rgb(249, 248, 248)",
  repeat: -1,
  yoyo: true,
  opacity: 1,
});

gsap.to("#glow2", {
  duration: 0.8,
  boxShadow: "0px 0px 20px 10px rgb(249, 248, 248)",
  repeat: -1,
  yoyo: true,
  opacity: 1,
});

gsap.to("#glowDiv", {
  x: "100vw",
  duration: 3,
  repeat: -1,
});

gsap.from("#text2", {
  color: "white",
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

gsap.to("#text2", {
  color: "black",
  duration: 2,
  repeat: -1,
  yoyo: true,
});

gsap.to("#text3", {
  color: "white",
  duration: 0.5,
  repeat: -1,
  opacity: 0.4,
  yoyo: true,
});

gsap.to("#glow3", {
  x: "-75vw",
  duration: 3,
  repeat: -1,
  opacity: 0.2,
  // yoyo: true,
});

gsap.to("#glow4", {
  x: "75vw",
  duration: 3,
  repeat: -1,
  opacity: 0.2,
  // yoyo: true,
});

gsap.from("#midline", {
  opacity: 0.1,
  duration: 0.75,

  repeat: -1,
  yoyo: true,
});

gsap.to("#glowDiv2", {
  y: "98vh",
  duration: 4,
  repeat: -1,
  opacity: 0.1,
});
