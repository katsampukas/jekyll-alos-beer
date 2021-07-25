/////////////
// Age wall
/////////////

document.addEventListener("DOMContentLoaded",function(){

  // Check if localstorage is set or is not adult
  if (localStorage.getItem("adult") === null ||
      localStorage.getItem("adult") === "false") {

    body.classList.add("agewall");
    console.log("not allowed to enter the site")
  }

  const yes = document.getElementById('yes')
  const no = document.getElementById('no')
  const agewall_node = document.getElementById('agewall')

  yes.addEventListener('click', () => {
    localStorage.setItem("adult", "true");
    location.reload();
  });

  no.addEventListener('click', () => {
    localStorage.setItem("adult", "false");
    agewall_node.classList.add("alert");
    console.log(localStorage.adult);
  });
});

