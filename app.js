gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

// Zoom parallex

gsap.to(".grid-1__wrapper", {
  y: 500,
  x: -500,
  scale: 2,
  scrollTrigger: {
    scrub: 1,
    end: "bottom bottom",
  },
});

gsap.to(".grid-2__wrapper", {
  y: 50,
  scale: 2,
  scrollTrigger: {
    scrub: 1,
    end: "bottom bottom",
  },
});

gsap.to(".grid-3__wrapper", {
  y: 500,
  x: 500,
  scale: 2,
  scrollTrigger: {
    scrub: 1,
    end: "bottom bottom",
  },
});

// Text Reveal Animation

gsap.from(".span-we span", {
  y: 100,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".span-we span",
  },
});

gsap.from(".span-are span", {
  y: 150,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".span-are span",
  },
});

gsap.from(".span-gritty span", {
  y: 100,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".span-gritty span",
  },
});

// About section animation paragraph

gsap.from(".about-section .about__description", {
  y: 100,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".about-section .about__description",
  },
});

// Circle Rotate on scroll

gsap.from(".circle-hero", {
  rotate: 360,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".circe-hero",
    scrub: 1,
    end: "bottom bottom",
  },
});

gsap.from(".circle-about", {
  rotate: 360,
  scrollTrigger: {
    trigger: ".circe-about",
    scrub: true,
  },
});
