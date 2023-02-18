const submitButton = document.querySelector("#submitButton");
const hiddenDate = document.querySelector("#hiddenDate");

submitButton.addEventListener("submit", () => {
    const formDate = new Date();
    hiddenDate.value = formDate;
})