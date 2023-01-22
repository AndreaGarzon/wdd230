
let last_update = new Date(document.lastModified);

document.getElementById("last_update").innerHTML = `Last Updated: ${last_update}`

let year = new Date().getFullYear();

document.getElementById("year").innerHTML = year

const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation")
const naveg = document.querySelector(".nav-space");

hambutton.addEventListener('click', () => {mainnav.classList.toggle("responsive")}, false);
hambutton.addEventListener('click', () => {naveg.classList.toggle("wider")}, false);


let todayVisit = Math.floor(Date.now() / 86400000);
const span = document.querySelector("#visits");

function setVisit() {
    localStorage.setItem("visit", JSON.stringify(todayVisit));

} 

function getVisit () {
    return JSON.parse(localStorage.getItem("visit"));

}

if (localStorage.getItem("visit")) {
    let pastVisit = getVisit();
    let numberOfVisit = todayVisit - pastVisit;
    let message = `You visited us ${numberOfVisit} days ago`;
    span.textContent = message;
    setVisit();
}
else {
    let message = "This is your first visit";
    span.textContent = message;
    setVisit();
}

