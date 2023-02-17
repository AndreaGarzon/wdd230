const weatherIcon = document.querySelector("#tempImg");
const weatherText = document.querySelector("#tempText");
const caption = document.querySelector("#caption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=4.4389&lon=-75.2322&appid=9bcff6efeaeffe3440cc6f11f8998b7d&units=imperial"
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
        } catch (error) {
            console.log(error);
        }
}
apiFetch();
function displayResults(data) {
    weatherText.innerHTML = data.main.temp.toFixed(0);
    const imagesrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const description = data.weather[0].description;
    weatherIcon.setAttribute("src", imagesrc);
    weatherIcon.setAttribute("alt", description);
    weatherIcon.setAttribute("width", "100px");
    let descriptionArray = description.split(" ");

    for (let i=0; i<descriptionArray.length; i++) {
        descriptionArray[i] =descriptionArray[i][0].toUpperCase()+descriptionArray[i].substr(1)
    }

    let description1 = descriptionArray.join(" ");
    caption.textContent = description1;
}



