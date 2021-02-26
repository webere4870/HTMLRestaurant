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
  let scrollControl = document.querySelector('body')
  {
    scrollControl.style.overflow = 'auto';
  }
}

function openMenu()
{
  let closer = document.querySelector(".mobileMenu");
  closer.style.cssText = "display: none;";
  let opener = document.querySelector(".toggleMenu");
  opener.style.cssText = "display: flex";
  let scrollControl = document.querySelector('body')
  {
    scrollControl.style.overflow = 'hidden';
  }
}

// function changeSlide(slideAmount)
// {
//   let changedSlide = document.getElementById("slideShowContainer");
//   changedSlide.style.left = slideAmount;
// }

// function forward()
// {
//   let currentPosition = document.getElementById("slideShowContainer").style.left;
//   console.log(currentPosition);
//   let newPosition = "";
//   if(currentPosition === "0vw")
//   {
//     document.getElementById("slideShowContainer").style.left = "-100vw";
//     document.getElementById("slide2").checked = true;
//   }
//   else if(currentPosition === "-100vw")
//   {
//     document.getElementById("slideShowContainer").style.left = "-200vw";
//     document.getElementById("slide3").checked=true;
//   }
//   else if(currentPosition === "-200vw")
//   {
//     document.getElementById("slideShowContainer").style.left = "-300vw";
//     document.getElementById("slide4").checked = true;
//   }
//   else if(currentPosition === "-300vw")
//   {
//     document.getElementById("slideShowContainer").style.left = "0vw";
//     document.getElementById("slide1").checked = true;
//   }
// }

// function backward()
// {
//   let currentPosition = document.getElementById("slideShowContainer").style.left;
//   console.log(currentPosition);
//   if(currentPosition === "0vw")
//   {
//     document.getElementById("slideShowContainer").style.left = "-300vw";
//     document.getElementById("slide4").checked = true;
//   }
//   else if(currentPosition === "-100vw")
//   {
//     document.getElementById("slideShowContainer").style.left = "0vw";
//     document.getElementById("slide1").checked=true;
//   }
//   else if(currentPosition === "-200vw")
//   {
//     document.getElementById("slideShowContainer").style.left = "-100vw";
//     document.getElementById("slide2").checked = true;
//   }
//   else if(currentPosition === "-300vw")
//   {
//     document.getElementById("slideShowContainer").style.left = "-200vw";
//     document.getElementById("slide3").checked = true;
//   }
// }

function findNumber(plusOrMinus)
{
  let currentSlide = document.getElementsByClassName('floater');
  let counter = 0;
  while(currentSlide[counter].style.display === 'none')
  {
    counter++;
  }
  if(plusOrMinus === 'plus')
  {
    if(counter === 3)
    {
      counter = 0;
    }
    else
    {
      counter++;
    }
  }
  else
  {
    if(counter === 0)
    {
      counter = 3;
    }
    else
    {
      counter--;
    }
  }
  changeSlide(counter);

}

function changeSlide(number)
{
  document.getElementsByClassName('radioJump')[number].checked = true;
  let newSlide = document.getElementsByClassName('floater')[number];
  newSlide.style.display = "flex";
  for(let counter = 0; counter < document.getElementsByClassName('floater').length; counter++)
  {
    if(counter === number)
    {

    }
    else
    {
      document.getElementsByClassName('floater')[counter].style.display = "none";
    }
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

function checkViewport()
{
  if(document.querySelectorAll('.toggleMenu')[0].style.display === 'flex')
  {

  }
  else
  {
    let myPixels = window.innerWidth;
  console.log(myPixels);
  if(myPixels < 1080)
  {
    let myCounter = document.querySelectorAll(".navigationBar").length;
    let myMobile = document.getElementsByClassName('navigationBar');
    for(let index = 0; index < myCounter; index++)
    {
      document.querySelectorAll(".navigationBar")[index].style.display = 'none';
      document.querySelectorAll(".mobileMenu")[index].style.display = 'flex';
    }
  }
  else
  {
    document.querySelectorAll(".navigationBar")[0].style.display = 'flex';
    document.querySelectorAll(".mobileMenu")[0].style.display = 'none';
  }
  }
}

setInterval(checkViewport, 200);