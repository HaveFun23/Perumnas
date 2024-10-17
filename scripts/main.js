
var but_menu = document.querySelector(".but_menu");
var modal_win = document.querySelector(".modal_win");
var body = document.querySelector("body");
var cross = document.querySelector(".cross");

but_menu.addEventListener("click", function () {
  modal_win.className = "modal_win active";
  body.style.overflow = "hidden";
});
cross.addEventListener("click", function () {
  modal_win.className = "modal_win";
  body.style.overflow = "unset";
});

var img_for_adapt = document.querySelector("#img_for_adapt");

setInterval(change, 1000);

function change() {
  var x = window.innerWidth;
  if (x <= 1600) {
    img_for_adapt.src = "./img/background/Hero Section 1600.png";
  }
  if (x <= 1300) {
    img_for_adapt.src = "./img/background/Hero Section 1300.png";
  }
  if (x > 1600) {
    img_for_adapt.src = "./img/background/Hero Section.png";
  }
} 
  var slider = tns({
    container: ".my-slider",
    items: 2,
    slideBy: "page",
    arrowKeys: true,
    autoplay: false,
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    nav: false,
    controlsContainer: ".arrows_container",
    autoWidth: true,
    
    responsive:{
      300:{
      gutter: 50
      },
      900:{
      gutter: 100
      }
      
    }
  });

