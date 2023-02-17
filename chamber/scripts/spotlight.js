const url = "https://andreagarzon.github.io/wdd230/chamber/data/members.json";
let companies = undefined;

fetch(url) 
.then(function(response) {

    return response.json();
})
.then (function(jsonObject) {
    companies = jsonObject["companies"];
    displaySpotlights();
})

function randomNum(min, max) {
    let number = Math.floor(Math.random()*(max-min+1)+min);
    return number;
}

let spotlights = [];
while(spotlights.length<3) {
    let randomNumber = randomNum(0, 4);
    if(spotlights.indexOf(randomNumber)<0) {
        spotlights.push(randomNumber);
    } 
} 

const spotsection = document.querySelector("#spotlight");
function displaySpotlights() {
    spotlights.forEach((spotlight) => {
        
        const spotdiv = document.createElement("div");
        spotdiv.className = "spot";
        const spotname = document.createElement("h2");
        spotname.textContent = companies[spotlight].name;
        const spotadress = document.createElement("p");
        spotadress.textContent = companies[spotlight].adress;
        const spotphone = document.createElement("p");
        spotphone.textContent = companies[spotlight].phoneNumber;
        const spotsite = document.createElement("a");
        spotsite.href = companies[spotlight].websiteURL;
        const spotimage = document.createElement("img");
        spotimage.src = companies[spotlight].image;
        spotimage.alt = `${companies[spotlight].name} logo`;
        const spotlevel = document.createElement("p");
        spotlevel.textContent = companies[spotlight].level;
        const spotevent = document.createElement("p"); 
        spotevent.textContent = companies[spotlight].nextEvent;
        
        spotdiv.appendChild(spotname);
        spotdiv.appendChild(spotadress);
        spotdiv.appendChild(spotphone);
        spotdiv.appendChild(spotsite);
        spotdiv.appendChild(spotimage);
        spotdiv.appendChild(spotlevel);
        spotdiv.appendChild(spotevent);

        spotlights.appendChild(spotdiv);
    })

}



