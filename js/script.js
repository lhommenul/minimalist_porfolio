let menu_opened = false;
function openMenu() {
    const nav = document.getElementsByClassName('menu_list')[0];
    const icon = document.getElementsByClassName('svg_hamburger')[0];
    if (menu_opened) {
        nav.style.display = "none"
        icon.src = "../assets/icons/hamburger.svg"
    } else {
        nav.style.display = "grid"
        icon.src = "../assets/icons/close.svg"
    }
    menu_opened = !menu_opened;
}   