
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

