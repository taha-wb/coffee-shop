let nav = document.querySelector("nav");
let barIcon = document.querySelector(".bar-icon");
let cartContainer = document.querySelector(".cart-items-container");
let cartIcon = document.querySelector(".cart-icon");
let searchIcon = document.querySelector(".search-icon");
let searchForm = document.querySelector(".search-form")

barIcon.onclick = () => {
    nav.classList.toggle("active");
    cartContainer.classList.remove("active");
    searchForm.classList.remove("active-search");
}


cartIcon.onclick = () => {
   cartContainer.classList.toggle("active");
   nav.classList.remove("active");
   searchForm.classList.remove("active-search");
}

searchIcon.onclick = () => {
    searchForm.classList.toggle("active-search");
    cartContainer.classList.remove("active");
    nav.classList.remove("active");
}

window.onscroll = () => {
    cartContainer.classList.remove("active");
    nav.classList.remove("active");
    searchForm.classList.remove("active-search");
}