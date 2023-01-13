const HamMenu = document.querySelector(".menu-button");
const items = document.querySelectorAll(".menu-item");

HamMenu.addEventListener("click",() => {
    items.forEach((item) => {
        item.classList.toggle("open");
        HamMenu.classList.toggle("close");
    })

})