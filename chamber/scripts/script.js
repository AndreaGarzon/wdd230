
let last_update = new Date(document.lastModified);

document.getElementById("last_update").innerHTML = `Last Updated: ${last_update}`

let year = new Date().getFullYear();

document.getElementById("year").innerHTML = year

const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation")
const naveg = document.querySelector(".nav-space");

hambutton.addEventListener('click', () => {mainnav.classList.toggle("responsive")}, false);
hambutton.addEventListener('click', () => {naveg.classList.toggle("wider")}, false);
