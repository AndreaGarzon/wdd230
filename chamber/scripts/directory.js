const url = "https://andreagarzon.github.io/wdd230/chamber/data/members.json";
const article = document.querySelector("#article");

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const members = jsonObject["companies"];
        members.forEach(displayMembers);
    })

function displayMembers (company)
{
    let space = document.createElement("section");
    let name = document.createElement("h2");
    let adress = document.createElement("p");
    let phoneNumber = document.createElement("p");
    let websiteURL = document.createElement("a");
    let image = document.createElement("img");
    let level  = document.createElement("p");
    let nextEvent = document.createElement("p");

   name.textContent = company.name ;
   adress.textContent = `Adress: ${company.adress}`;
   phoneNumber.textContent = `Phone Number: ${company.phoneNumber}`;
   websiteURL.textContent = "More info:";
   websiteURL.href = company.websiteURL;
   image.src = company.image;
   image.alt = company.name;
   level.textContent = company.level;
   nextEvent.textContent = company.nextEvent;

   space.appendChild(name);
   space.appendChild(adress);
   space.appendChild(phoneNumber);
   space.appendChild(websiteURL);
   space.appendChild(image);
   space.appendChild(level);
   space.appendChild(nextEvent);

   space.className = "membersCards";

   article.appendChild(space);
}

const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton");
function changeToGrid () {
    article.classList.add("gridMode");
    article.classList.remove("listMode");   
}

function changeToList () {
    article.classList.add("listMode");
    article.classList.remove("gridMode");   
}

gridButton.addEventListener("click", changeToGrid);
listButton.addEventListener("click", changeToList);