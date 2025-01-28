// console.log(gsap);

const mouse = document.querySelector(".mouse-pointer");
document.addEventListener("mousemove", (e) => {
  gsap.to(mouse, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.7,
    ease: "power2.out",
  });
});

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

  const text = document.getElementById("sumit");
  const textContent = text.innerText;
  const splitText = textContent.split("");

  text.innerHTML = "";
  const halfLength = splitText.length / 2;
  splitText.forEach((e, i) => {
    if (i < halfLength) {
      text.innerHTML += `<span class="x">${e}</span>`;
    } else if (e === " ") {
      text.innerHTML += `<span class="x">&nbsp;</span>`;
    } else {
      text.innerHTML += `<span class="y">${e}</span>`;
    }
  });
  gsap.from("#sumit span.x", {
    x: 100,
    y: 80,
    scale: 2,
    duration: 0.7,
    delay: 0.3,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#sumit",
      start: "top 80%",
      end: "top: 40%",
      // markers: true,
      scrub: true,
    },
  });
  gsap.from("#sumit span.y", {
    x: -100,
    y: 80,
    scale: 2,
    duration: 0.7,
    delay: 0.3,
    opacity: 0,
    stagger: -0.3,
    scrollTrigger: {
      trigger: "#sumit",
      start: "top 80%",
      end: "top: 40%",
      // markers: true,
      scrub: true,
    },
  });

  gsap.to("#about", {
    scale: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: "#about",
      scroller: "body",
      start: "top 80%",
      end: "top 30%",
      scrub: 1,
    },
  });
  gsap.to("#pin", {
    x: "-200%",
    ease: "none",
    scrollTrigger: {
      trigger: "#pin",
      start: "top top",
      scrub: 2,
      pin: true,
    },
  });

  // text reveal animation
  const revealText = document.getElementById("reveal-text");
  const rText = revealText.innerText;
  const splitRevealText = rText.split("");
  revealText.innerHTML = "";
  splitRevealText.forEach((e) => {
    if (e === " ") {
      revealText.innerHTML += `<span class="single-text">&nbsp;</span>`;
    } else {
      revealText.innerHTML += `<span class="single-text">${e}</span>`;
    }
  });

  // GSAP animation with ScrollTrigger
  gsap.to(".single-text", {
    y: -10,
    opacity: 1, // Start with text hidden
    stagger: 0.05, // Add stagger for the animation
    scrollTrigger: {
      trigger: revealText,
      start: "top 70%", // Trigger when the top of the element reaches 90% of the viewport
      end: "bottom 30%", // End the animation when the bottom of the element reaches 10% of the viewport
      scrub: true, // Smooth animation that is linked to the scroll
      // pin: true,
      // markers: true,
    },
  });
}
