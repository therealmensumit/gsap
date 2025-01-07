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

  const text = document.getElementById("sumit");
  const textContent = text.innerText;
  const splitText = textContent.split("");

  text.innerHTML = "";
  const halfLength = splitText.length / 2;
  splitText.forEach((e, i) => {
    if (i < halfLength) {
      text.innerHTML += `<span class="x">${e}</span>`;
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
}
