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
    console.log(bookForm);
    if (bookForm.style.display === "none") {
        bookForm.style.display = "block";
    } else {
        bookForm.style.display = "none";
    }
}