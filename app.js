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

gsap.from(".about__description", {
  y: 100,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".about__description",
  },
});

// Circle Rotate on scroll

gsap.from(".circle-hero", {
  rotate: 360,
  duration: 15,
  scrollTrigger: {
    trigger: ".circle-hero",
    scrub: 1,
  },
});

gsap.from(".circle-about", {
  rotate: 360,
  duration: 15,
  scrollTrigger: {
    trigger: ".circle-about",
    scrub: true,
  },
});

// hide logo and contact from navbar

let scrollPosition = window.scrollY;

function hideLogo() {
  const logo = document.querySelector(".nav-col-1 .logo__wrapper");
  const contact = document.querySelector(".nav-col-3 p");

  const currentPosition = window.scrollY;

  if (currentPosition > scrollPosition) {
    logo.classList.add("hide-logo");
    contact.classList.add("hide-contact");
  } else {
    logo.classList.remove("hide-logo");
    contact.classList.remove("hide-contact");
  }

  scrollPosition = currentPosition;
}

window.addEventListener("scroll", hideLogo);


// Horizontal Scrolling

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container-horizontal",
    pin: true,
    scrub: 1,
    end: () => "+=" + document.querySelector(".container-horizontal").offsetWidth
  }
});

