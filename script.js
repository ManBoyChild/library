let myLibrary = [];

//BOOK CONSTRUCTOR
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this. status = status;
}

//ADD BOOK TO LIBRARY ARRAY
function addBookToLibrary(); {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const hasRead = document.getElementById("read");

    const newBook = Object.create(Book);

    newBook.title = title.innerText;
    newBook.author = author.innerText;
    newBook.pages = pages.innerText;
    newBook.status = hasRead.checked;

}

// MODAL FUNCTIONALITY
const modal = document.getElementsByClassName("modal")[0];
const addBookBtn = document.querySelector(".addBook");
const closeBtn = document.querySelector(".closeBtn");
const submitBtn = document.querySelector(".submit");

addBookBtn.addEventListener("click", openModal);
closeBtn.addEventListener ("click", closeModal);
submitBtn.addEventListener("click", closeModal);
window.addEventListener("click", windowClick);

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function windowClick(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}