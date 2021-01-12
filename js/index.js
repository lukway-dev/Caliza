const body = document.querySelector("body");

const start = document.querySelector(".start");
const home = document.querySelector(".home");
const portfolio = document.querySelector(".portfolio");
const contact = document.querySelector(".contact");

const offSetStart = start.offsetTop - 50;
const offSetHome = home.offsetTop - 50;
const offSetPortfolio = portfolio.offsetTop - 50;
const offSetContact = contact.offsetTop - 50;

const buttonsContainer = document.querySelector(".nav_buttons");
const buttons = document.querySelectorAll(".nav_button");
const buttonStart = buttons[0];
const buttonHome = buttons[1];
const buttonPortfolio = buttons[2];
const buttonContact = buttons[3];

const buttonsMobileContainer = document.querySelector(".nav_mobile_buttons");
const buttonsMobile = document.querySelectorAll(".nav_mobile_button");
const buttonMobileStart = buttonsMobile[0];
const buttonMobileHome = buttonsMobile[1];
const buttonMobilePortfolio = buttonsMobile[2];
const buttonMobileContact = buttonsMobile[3];

const iconoInicio = document.querySelector(".icon_start");
const titleContainer = document.querySelector(".title");
const titles = ["Logos", "Posteos para Redes", "Vectorizaciones", "Videos para Redes", "Diseño Gráfico"]

let x = 0;

const mobileQuery = window.matchMedia("(max-width: 768px)");

// AOS Library Init
AOS.init();


// Animation for Init Page
setTimeout(function(){
  titleContainer.animate(
    [
      {opacity: 0},
      {opacity: 1},
      {opacity: 1},
      {opacity: 1},
      {opacity: 1},
      {opacity: 0}
    ],{
      duration: 2000,
      iterations: Infinity
    }
  );
  setInterval(function()
  {
    if(x == 5){
      x = 0;
    }
    titleContainer.innerHTML = `${titles[x]}`
    x++;
  }, 2000);
}, 1000)

setTimeout(function()
{
  body.classList.remove("no-scroll");
  iconoInicio.classList.add("hidden");
}, 3000)



// Scroll Function
const Scroll = (section) => {
  let offsetTop = section.offsetTop - 50;
  console.log(window.scrollY);
  console.log(section.offsetTop);
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// Style Nav Buttons on Scroll
window.onscroll = function() {
  let y = window.scrollY;;
  let button;
  let styleClass;
  if(mobileQuery.matches){
    button = buttonsMobile;
    styleClass = "current-section-mobile";
  } else {
    button = buttons;
    styleClass = "current-section";
  }
  if (y >= offSetStart) {
    button[0].classList.add(styleClass);
    button[1].classList.remove(styleClass);
    button[2].classList.remove(styleClass);
    button[3].classList.remove(styleClass);
  }
  if (y >= offSetHome - 50) {
    button[0].classList.remove(styleClass);
    button[1].classList.add(styleClass);
    button[2].classList.remove(styleClass);
    button[3].classList.remove(styleClass);
  }
  if (y >= offSetPortfolio - 50) {
    button[0].classList.remove(styleClass);
    button[1].classList.remove(styleClass);
    button[2].classList.add(styleClass);
    button[3].classList.remove(styleClass);
  }
  if (y >= offSetContact - 50) {
    button[0].classList.remove(styleClass);
    button[1].classList.remove(styleClass);
    button[2].classList.remove(styleClass);
    button[3].classList.add(styleClass);
  }
};

buttonHome.addEventListener("click", function(){Scroll(home)});
buttonStart.addEventListener("click", function(){Scroll(start)});
buttonPortfolio.addEventListener("click", function(){Scroll(portfolio)});
buttonContact.addEventListener("click", function(){Scroll(contact)});

buttonMobileHome.addEventListener("click", function(){Scroll(home)});
buttonMobileStart.addEventListener("click", function(){Scroll(start)});
buttonMobilePortfolio.addEventListener("click", function(){Scroll(portfolio)});
buttonMobileContact.addEventListener("click", function(){Scroll(contact)});
