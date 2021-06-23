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
