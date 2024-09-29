const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");
const menu = document.querySelector(".nav-menu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.add("show-menu");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  });
}

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  })
);

// --------------- Change Header Background -------
const scrollHeader = () => {
  const header = document.getElementById("header");
  if (window.scrollY >= 80) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};

window.addEventListener("scroll", scrollHeader);

// ----------- Testimonial SWiper --------------
var testimonialSwiper = new Swiper(".testimonial-swiper", {
  spaceBetween: 30,
  loop: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ----------- New Swiper --------------
var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 24,
  loop: "true",
  
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }
});
