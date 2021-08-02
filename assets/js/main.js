//////////
// Navbar
//////////

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

window.addEventListener('scroll', onScroll);


//////////
// Menu
/////////

const menu = document.getElementById('nav-trigger');
const body = document.body;

menu.addEventListener('click', function(){

  if (menu.checked == true){
    body.classList.add("menu-active");
  }
  else {
    body.classList.remove("menu-active");
  }
})

var menu_items = document.getElementsByClassName("menu-anchor");

Array.from(menu_items).forEach(function(element) {
  element.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('nav-trigger').click();
    var id = element.href.split("/").pop().replace("#", "");;
    var scroll = document.getElementById(id);
    scroll.scrollIntoView({behavior: 'smooth' })
  });
});


/////////////////
// Start button
/////////////////

var enarxi = document.getElementById("enarxi");

enarxi.addEventListener('click', function(e){
  e.preventDefault();
  document.getElementById("s2").scrollIntoView({behavior: 'smooth' })
});


///////////////////////
// Scroll Magic Mobile
///////////////////////

gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth < 1150) {

  // 1st step
  gsap.to("#mpoukali-animated", {
    x: 0,
    y: 1443,
    rotation: 324,
    scrollTrigger: {
      trigger: "#start",
      start: "80px",
      end: "+=700px",
      scrub: 2,
      once: true
    }
  });

  // 2nd step
  gsap.fromTo("#mpoukali-animated", {
    x: 0,
    y: 1443,
    rotation: 324,
  },
  {
    x: 87,
    y: 2377,
    rotation: 360,
    scrollTrigger: {
      trigger: "#s3",
      start: "top center",
      end: "top 100px",
      scrub: 1
    }
  });

  // 3rd step
  gsap.fromTo("#mpoukali-animated", {
    x: 87,
    y: 2377,
    rotation: 360,
  },
  {
    x: 0,
    y: 3175,
    rotation: 386,
    scrollTrigger: {
      trigger: "#s4",
      start: "top center",
      end: "top 100px",
      scrub: 1
    }
  });
}


////////////////
// Menu Desktop
////////////////

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    var bodyclass = entry.target.id;
    if(entry.isIntersecting){
      console.log(entry.target.id);
      body.classList.add(bodyclass);
    }
    else {
      body.classList.remove(bodyclass);
    }
  });
}, {rootMargin: "-50%"});

document.querySelectorAll('#start, #s5').forEach(section => {
  observer.observe(section)
});


let observer3 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    var bodyclass = entry.target.id;
    if(entry.isIntersecting){
      body.classList.add(bodyclass);
    }
    else {
      body.classList.remove(bodyclass);
    }
  });
}, {rootMargin: "920px 0% -50% 0%"});

const section2 = document.getElementById("s2")
observer3.observe(section2)


let observer4 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    var bodyclass = entry.target.id;
    if(entry.isIntersecting){
      body.classList.add(bodyclass);
    }
    else {
      body.classList.remove(bodyclass);
    }
  });
}, {rootMargin: "450px 0% -50% 0%"});

const section3 = document.getElementById("nav3")
observer4.observe(section3)


let observer5 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    var bodyclass = entry.target.id;
    if(entry.isIntersecting){
      body.classList.add(bodyclass);
    }
    else {
      body.classList.remove(bodyclass);
    }
  });
}, {rootMargin: "160px 0% -50% 0%"});

const section4 = document.getElementById("nav4")
observer5.observe(section4)


///////////////////////
// Scroll Magic Desktop
///////////////////////

gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth >= 1150) {

  // 1st step
  gsap.to("#mpoukali-animated", {
    x: 0,
    y: 2000,
    rotation: 340,
    scrollTrigger: {
      trigger: "#start",
      start: "80px",
      end: "+500px",
      scrub: 2,
      once: true
    }
  });

  // 2nd step
  gsap.fromTo("#mpoukali-animated", {
    x: 0,
    y: 2000,
    rotation: 340,
  },
  {
    x: -40,
    y: 2950,
    rotation: 360,
    scrollTrigger: {
      trigger: "#s3",
      start: "top 70%",
      end: "top 650px",
      scrub: 1
    }
  });

  // 3rd step
  gsap.fromTo("#mpoukali-animated", {
    x: -40,
    y: 2950
  },
  {
    x: -260,
    y: 4015,
    rotation: 380,
    scrollTrigger: {
      trigger: "#s4",
      start: "top 80%",
      end: "top 500px",
      scrub: 1
    }
  });
}


//////////////////////////
// Add Fade Texts Effects
//////////////////////////

let observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fadeIn")
    }
    else {
      entry.target.classList.remove("fadeIn")
    }
  });
}, {rootMargin: "-20%"});

document.querySelectorAll(".fade").forEach(section => {
  observer2.observe(section)
});
