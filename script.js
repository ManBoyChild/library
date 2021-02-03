let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this. status = status;
}

// MODAL FUNCTIONALITY
const modal = document.getElementsByClassName("modal")[0];
const addBookBtn = document.querySelector(".addBook");
const closeBtn = document.querySelector(".closeBtn");

addBookBtn.addEventListener("click", openModal);

closeBtn.addEventListener ("click", closeModal);

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