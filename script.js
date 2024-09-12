function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
init();

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 ",
    scrub: true,
    //   markers: true,
    start: "5% 10%",
    end: "30% top",
    scroller: ".main",
    scrub: 3,
  },
});

tl.to(
  ".page1 h1",
  {
    x: -180,
    duration: 2,
  },
  "a"
);

tl.to(
  ".page1 h2",
  {
    x: 180,
    duration: 2,
  },
  "a"
);

tl.to(
  ".page1 video",
  {
    width: "80%",
    duration: 2,
  },
  "a"
);

let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2 ",
    markers: true,
    start: "5% 10%",
    end: "30% top",
    scroller: ".main",
    scrub: 3,
  },
});

t2.to(".main", {
  backgroundColor: "#fff",
});

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3 ",
    markers: true,
    start: "5% 10%",
    end: "10% top",
    scroller: ".main",
    scrub: 3,
  },
});

t3.to(".main", {
  backgroundColor: "black  ",
});

let cursor = document.querySelector(".cursor");
let main = document.querySelector(".main");
let vid = document.querySelector("video");

main.addEventListener("mousemove", (e) => {
  cursor.style.left = e.x + 20 + "px";
  cursor.style.top = e.y + 20 + "px";
});

vid.addEventListener("mouseenter", (e) => {
  cursor.style.width = "100px";
  cursor.style.borderRadius = "10px";
  cursor.innerText = "Sound On";
});

vid.addEventListener("mouseleave", (e) => {
  cursor.style.width = "20px";
  cursor.style.borderRadius = "50%";
  cursor.innerText = "";
});

let feature = document.querySelectorAll(".feature");

feature.forEach((ele) => {
  let att = ele.getAttribute("data-image");
  console.log(att);

  ele.addEventListener("mouseenter", function (dets) {
    cursor.style.width = "200px";
    cursor.style.height = "200px";
    cursor.style.borderRadius = "0px";
    cursor.style.backgroundImage = `url(${att})`;
  });

  ele.addEventListener("mouseleave", function (dets) {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = `none`;
  });
});
