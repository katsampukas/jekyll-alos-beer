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

if (window,innerWidth < 800) {

  // 1st step
  gsap.to("#mpoukali-animated", {
    x: 0,
    y: 1432,
    rotation: 324,
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
    y: 1432,
    rotation: 324,
  },
  {
    x: 87,
    y: 2354,
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
    x: 87,
    y: 2354,
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
      scrub: true,
      id: "scrub"
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

document.querySelectorAll('section').forEach(section => {
  observer.observe(section)
});

