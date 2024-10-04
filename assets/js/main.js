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
  },
});

// ------- Scroll Sections active link -------
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

// ----------- Show Scroll up -------
function showScrollUp () {
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 400) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', showScrollUp);

// ---------- Show Cart ------------

const cartToggle = document.getElementById("cart-toggle");
const cart = document.getElementById("cart")
const closeCart = document.getElementById("close-cart");

if(cartToggle){
  cartToggle.addEventListener('click' , () => {
    cart.classList.add('show-cart');
  }) 
}

if(closeCart){
  closeCart.addEventListener('click' , () => {
    cart.classList.remove('show-cart');
  }) 
}
