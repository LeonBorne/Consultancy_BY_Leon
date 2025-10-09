const NavBar = document.getElementById("nav-container")

const StudyAbroad = document.getElementById("study-abroad");
const HoverMenu = document.getElementById("study-abroad-hover");

StudyAbroad.addEventListener("mouseover", showMore);
HoverMenu.addEventListener("mouseleave", scheduleHide);
HoverMenu.addEventListener("mouseover", showMore);

let hideTimer; // Variable to hold the timeout ID

/* I changed this ok*/


function showMore() {

  clearTimeout(hideTimer);

  HoverMenu.classList.add("show");
  StudyAbroad.innerHTML = "Study Abroad <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000000'><path d='m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z'/></svg>";

}

function hideMore() {

  HoverMenu.classList.remove("show");

  StudyAbroad.innerHTML = 'Study Abroad <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"/></svg>'

}

function scheduleHide() {

  hideTimer = setTimeout(hideMore, 1000); // Schedule hideMore to run after 2000ms

}


//This handles the green underline when hovered on the nav-bar's country-container
const country_container = Array.from(document.querySelectorAll(".country-container"))

country_container.forEach(element => {
  
  element.addEventListener("mouseover", (event) =>{
    let underline_target = event.currentTarget.children[1]
    underline_target.classList.add("run")
  })

  element.addEventListener("mouseout", (event) => {
    let underline_target = event.currentTarget.children[1]
    underline_target.classList.remove("run")
  })
});
