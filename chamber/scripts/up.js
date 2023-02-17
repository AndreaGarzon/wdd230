const joinUs = document.querySelector(".up");
joinUs.addEventListener("click", sendToJoin);

function sendToJoin() {
    location.href = "./join.html";
}