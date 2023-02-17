let yearb = new Date().getFullYear();

document.getElementById("year").innerHTML = yearb

let monthsb = Array("January", "February", "March", "April", "June", "July","August", "September", "October", "November", "December")
let weekdaysb = Array("sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")

let todayb = new Date();

let weekdayb = weekdaysb[todayb.getDay()];
let dayb = todayb.getDate();
let monthb = monthsb[todayb.getMonth()];

//document.getElementById("today").innerHTML = `${weekdayb} , ${dayb} ${monthb} ${yearb}`

if (weekdayb == "Monday" || weekdayb == "Tuesday" || weekdayb == "Wednesday") {
    const header = document.querySelector("header");
    const alert = document.createElement("p");
    alert.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    alert.className = "alert";
    header.appendChild(alert);
}
