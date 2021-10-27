const menuOptions = document.querySelectorAll(".dropdown-menu__text");
const imageOptions = document.querySelectorAll(".dropdown-menu__image");
const dropdown = document.querySelectorAll(".dropdown");

const showMenu = document.querySelector(".nav-page__image-menu");
const menu = document.querySelector(".nav-page__box-menu");

const meneHeight = ["29.4rem","23.5rem", "17.6rem"];

var optionSelect = -1;

function addEventClickToMenu(menuOptions, dropdown, index){
    menuOptions[index].addEventListener('click', function (event) {

        dropdown[index].classList.toggle("dropdown--show");
        imageOptions[index].classList.toggle("dropdown-menu__image--transition");
        
        if(optionSelect != -1 && optionSelect != index){
            if(dropdown[optionSelect].classList.contains("dropdown--show")){
                dropdown[optionSelect].classList.toggle("dropdown--show");
                imageOptions[optionSelect].classList.toggle("dropdown-menu__image--transition");
            }
        }

        optionSelect = index;

    });
}

showMenu.addEventListener('click', function (event) {
    menu.classList.toggle("nav-page__box-menu--show");
});

for(a = 0; a < menuOptions.length; a++){
    addEventClickToMenu(menuOptions, dropdown, a);
}