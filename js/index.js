/////////////Start navigation when scrolling
let header = document.querySelector(".nav-bar");
window.onscroll = addEventListener("scroll", (e) => {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    header.classList.add("scroll-header");
    header.style.top = "0";
    document.querySelector(".nav-bar .logo").style.color = "#000";
  } else {
    document.querySelector(".nav-bar .logo").style.color = "#fff    ";
    header.classList.remove("scroll-header");
    header.style.top = "0";
  }
});
/////////////End navigation when scrolling

let boxes = document.querySelectorAll(
  ".apply-now .right-side .about-box .about-course"
);
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (e.target === box) {
      box.parentElement.classList.toggle("open");
    }
    if (box.parentElement.classList.contains("open")) {
      box.classList.add("color");
    } else {
      box.classList.remove("color");
    }
  });
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3, // Number of items to display
    loop: true, // Infinite loop
    margin: 10, // Margin between items
    responsiveClass: true, // Enable responsive options
    responsive: {
      0: {
        items: 1, // Number of items to display on small screens
      },
      768: {
        items: 2, // Number of items to display on medium screens
      },
      1024: {
        items: 3, // Number of items to display on large screens
      },
    },
  });
});
