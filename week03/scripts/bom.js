
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


let chapters = getChapterList() || [];
chapters.forEach((chapter) =>{
    displayList(chapter);
}); 

button.addEventListener("click", function() {
    if (input.value !== "") {
        displayList = (input.value);
        chapters.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();

       
    }
})

function displayList (item) {
    const li = document.createElement("li");
    const del = document.createElement("button");
    li.textContent = input.value;
    del.textContent = "❌";
    li.append(del);
    list.appendChild(li);
    del.addEventListener("click", function() {
        list.removeChild(li);
    })
}