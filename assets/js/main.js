// Navbar

const navbar = document.getElementsByTagName('header');

// OnScroll event handler
const onScroll = () => {

  // Get scroll value
  const scroll = document.documentElement.scrollTop;

  // If scroll value is more than 0 - add class
  if (scroll > 0) {
    navbar[0].classList.add("scrolled");
  } else {
    navbar[0].classList.remove("scrolled")
  }
}

window.addEventListener('scroll', onScroll)


///////////////
// Scroll Magic

gsap.registerPlugin(ScrollTrigger);

// 1st step
gsap.to("#mpoukali-animated", {
  x: 0,
  y: 1648,
  rotation: 327,
  scrollTrigger: {
    trigger: "#start",
    start: "80px",
    end: "+=700px",
    scrub: true,
    id: "scrub"
  }
});

// 2nd step
gsap.fromTo("#mpoukali-animated", {
  x: 0,
  y: 1648,
  rotation: 327,
},
{
  x: 101,
  y: 2718,
  rotation: 360,
  scrollTrigger: {
    trigger: "#s3",
    start: "top center",
    end: "top 100px",
    scrub: true,
    id: "scrub"
  }
});

// 3rd step
gsap.fromTo("#mpoukali-animated", {
  x: 101,
  y: 2718,
  rotation: 360,
},
{
  x: 0,
  y: 3631,
  rotation: 374,
  scrollTrigger: {
    trigger: "#s4",
    start: "top center",
    end: "top 100px",
    scrub: true,
    id: "scrub"
  }
});
