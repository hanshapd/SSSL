// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})


const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})





// Swiper Hero Section
var listArray = ["slide1","slide2","slide3"];
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
        loop: true,
        autoplayDisableOnInteraction: false,
        slidesPerView: 1,        
        autoHeight: true,
        autoplay: {
            delay: 3000,//animation과 시간 맞춰줘야함
        }, 
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: 'true',
            type: 'bullets',
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<em>'+ listArray[index]+'</em>' + '<i></i>' + '<b></b>'  + '</span>';
              },
        
        },
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
})
