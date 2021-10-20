const menuOptions = document.querySelectorAll(".dropdown-menu__text");
const dropdown = document.querySelectorAll(".dropdown");

const imageMenu = document.querySelector(".nav-page__image-menu");
const menu = document.querySelector(".nav-page__box-menu");

var optionSelect = -1;

function addEventClickToMenu(menuOptions, dropdown, index){
    menuOptions[index].addEventListener('click', function (event) {

        dropdown[index].classList.toggle("dropdown--show");
        
        if(optionSelect != -1 && optionSelect != index){
            if(dropdown[optionSelect].classList.contains("dropdown--show")){
                dropdown[optionSelect].classList.toggle("dropdown--show");
            }
        }

        optionSelect = index;

    });
}

imageMenu.addEventListener('click', function (event) {
    menu.classList.toggle("nav-page__box-menu--show");
});

for(a = 0; a < menuOptions.length; a++){
    addEventClickToMenu(menuOptions, dropdown, a);
}