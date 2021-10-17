const menuOptions = document.querySelectorAll(".dropdown-menu__text");
const dropdown = document.querySelectorAll(".dropdown");

var optionSelect = -1;

function addEventClickToMenu(menuOptions, dropdown, index){
    menuOptions[index].addEventListener('click', function (event) {
        dropdown[index].classList.toggle("dropdown--show");
        if(optionSelect != index){
            if(optionSelect != -1){
                dropdown[optionSelect].classList.toggle("dropdown--show");
            }
            optionSelect = index;
        }
    });
}

for(a = 0; a < menuOptions.length; a++){
    addEventClickToMenu(menuOptions, dropdown, a);
}