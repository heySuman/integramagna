const container = document.getElementById("container");
const wrapper1 = document.querySelector(".grid-1__wrapper");
const wrapper2 = document.querySelector(".grid-2__wrapper");
const wrapper3 = document.querySelector(".grid-3__wrapper");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      window.addEventListener("scroll", test);
    } else {
      window.removeEventListener("scroll", test);
    }
  });
});

observer.observe(container);

function test() {
  console.log("I am being fired here");
  const { top } = container.getBoundingClientRect();

  const start = window.innerHeight;
  const end = 0;
  const progress = Math.min(Math.max((top - end) / (start - end), 0), 1);

  const scale = 0.75 + 0.25 * (1 - progress);
  const t1 = -50 - 25 * progress;
  const t2 = -50 - 50 * progress;
  const t3 = -50 - 25 * progress;

  wrapper1.style.transform = `translateY(${t1}%) scale(${scale})`;
  wrapper2.style.transform = `translateY(${t2}%) scale(${scale})`;
  wrapper3.style.transform = `translateY(${t3}%) scale(${scale})`;
}
