var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); 
}

var $cat_display = document.getElementsByClassName("page_category_menu_dropdown_main")[0];

function ShowCategory(){
    $cat_display.style.display = "flex";
}
function HideCategory(){
    $cat_display.style.display = "none";
}

var MobileMenu = document.getElementsByClassName("mobile_menu_display")[0];

function OpenMobileMenu(){
    MobileMenu.style.display = "block";
}

function CloseMobileMenu(){
    MobileMenu.style.display = "none";
}