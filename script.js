let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this. status = status;
}

//ADD BOOK BUTTON
const addBookBtn = document.querySelector(".addBook");
console.log(addBookBtn);
addBookBtn.addEventListener("click", toogleForm);

function toogleForm() {
    let bookForm = document.querySelector(".bookForm");
    if (bookForm.style.display === "none") {
        bookForm.style.display = "flex";
        bookForm.style.flexDirection = "column";
        bookForm.style.justifyContent = "space-between";
        bookForm.style.alignItems = "center";
    } else {
        bookForm.style.display = "none";
    }
}