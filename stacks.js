let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

const mediaQuery = window.matchMedia('(max-width: 1080px)')

function closeMenu()
{
  let closer = document.querySelector(".toggleMenu");
  closer.style.cssText = "display: none;";
  let opener = document.querySelector(".mobileMenu");
  opener.style.cssText = "display: flex";
}

function openMenu()
{
  let closer = document.querySelector(".mobileMenu");
  closer.style.cssText = "display: none;";
  let opener = document.querySelector(".toggleMenu");
  opener.style.cssText = "display: flex";
}

function changeSlide(slideAmount)
{
  let changedSlide = document.getElementById("slideShowContainer");
  changedSlide.style.left = slideAmount;
}

function forward()
{
  let currentPosition = document.getElementById("slideShowContainer").style.left;
  console.log(currentPosition);
  let newPosition = "";
  if(currentPosition === "0vw")
  {
    document.getElementById("slideShowContainer").style.left = "-100vw";
    document.getElementById("slide2").checked = true;
  }
  else if(currentPosition === "-100vw")
  {
    document.getElementById("slideShowContainer").style.left = "-200vw";
    document.getElementById("slide3").checked=true;
  }
  else if(currentPosition === "-200vw")
  {
    document.getElementById("slideShowContainer").style.left = "-300vw";
    document.getElementById("slide4").checked = true;
  }
  else if(currentPosition === "-300vw")
  {
    document.getElementById("slideShowContainer").style.left = "0vw";
    document.getElementById("slide1").checked = true;
  }
}

function closeFixer(slideToClose)
{
  let closer = document.getElementById(slideToClose);
  closer.style.cssText = "display: none";
  document.querySelector("body").style.overflowY = "scroll";
}

function openSlide(slideToDisplay)
{
  let opener = document.getElementById(slideToDisplay);
  document.querySelector("body").style.overflowY = "hidden";
  opener.style.cssText = "display: inherit; overflow-y: scroll";
}