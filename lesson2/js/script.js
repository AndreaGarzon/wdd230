
let last_update = new Date(document.lastModified);

document.getElementById("last_update").innerHTML = `Last Updated: ${last_update}`

let year = new Date().getFullYear();

document.getElementById("year").innerHTML = year
