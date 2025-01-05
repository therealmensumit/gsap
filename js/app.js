console.log(gsap);

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

if (screen.width > 768) {
  tl.from(".navbar-brand", {
    y: -30,
    opacity: 0,
    duration: 0.7,
  });

  tl.from(".nav-link", {
    y: -30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.3,
  });

  tl.from("#hero", {
    scale: 0.4,
    opacity: 0,
  });

  gsap.to("#demo>span", {
    x: "-53%",
    scrollTrigger: {
      trigger: "#demo",
      start: "top 0%",
      scrub: 2,
      pin: true,
    },
  });
  gsap.to("#about", {
    scale: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: "#about",
      scroller: "body",
      // markers: true,
      start: "top 80%",
      end: "top 30%",
      scrub: 1,
    },
  });
  gsap.to("#pin", {
    x: "-200%",
    ease: "none",
    scrollTrigger: {
      trigger: "#pin", // This will trigger when the #pin section is in view
      start: "top top", // Animation starts when the top of the #pin hits the top of the viewport
      // end: "+=300%", // Adjust based on the number of sections and scroll distance
      scrub: 2, // This makes the animation scrub in sync with the scroll
      pin: true, // This will pin the #pin container in place during the scroll animation
      // anticipatePin: 1, // Optionally anticipates when the pin will be triggered
    },
  });
}

/* const bow = document.getElementById("bow");
bow.addEventListener("mousemove", (event) => {
  console.log(event.x);
}); */
