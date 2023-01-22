
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
    li.textContent = item;
    del.textContent = "❌";
    li.appendChild(del);
    list.appendChild(li);
    del.addEventListener("click", function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}

function setChapterList() {
    localStorage.setItem("favOfBOM", JSON.stringify(chapters));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("favOfBOM"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length-1);
    chapters = chapters.filter((item) => item !== chapter);
    setChapterList();
}
