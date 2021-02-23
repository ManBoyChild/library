let myLibrary = [];

//BOOK CONSTRUCTOR
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

//CHANGED THE ACTUAL READ STATUS OF SPECIFIC OBJECT WHEN TOOGLE SWITCH IS FLIPPED
Book.prototype.readStatus = function() {
    if(this.status == true) {
        this.status = false;
    } else if (this.status == false) {
        this.status = true;
    }
}

//ADD BOOK TO LIBRARY ARRAY
const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const hasRead = document.getElementById("read");

    let newBook = new Book;

    if (title.value === "" || author.value === "" || pages.value === "") {
        alert("Pleaes fill in all the values before adding a new book to your libray");
    } else if (isNaN(pages.value)){ 
        alert("Please only use nubmers for the pages value.");
    } else {
        newBook.title = title.value;
        newBook.author = author.value;
        newBook.pages = pages.value;
        newBook.status = hasRead.checked;
    }

    myLibrary.push(newBook);

    title.value = "";
    author.value = "";
    pages.value = ""
    hasRead.checked = false;

    addBookToDisplay(myLibrary);
}

//ITERATIVE FUNCTION ADDING BOOKS TO LIBRARY DISPLAY
const bookDisplay = document.querySelector(".bookDisplay");
let arrayIndex = 0;

function addBookToDisplay(libArray) {
    //DECLARING ALL THE DIFFERENT HTML ELEMENTS AND CLASSES
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("bookContainer");

    const bookTitle = document.createElement("div");
    bookTitle.classList.add("bookTitle");

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("deleteBtn");

    const bookAuthor = document.createElement("div");
    bookAuthor.classList.add("bookAuthor");

    const bookPages = document.createElement("div");
    bookPages.classList.add("bookPages");

    const bookHasRead = document.createElement("div");
    const read = document.createElement("label");
    const switchBtn = document.createElement("label");
    const checkbox = document.createElement("input");
    const slider = document.createElement("span");

    bookHasRead.classList.add("bookHasRead");
    switchBtn.classList.add("switch");
    checkbox.type = "checkbox";
    slider.classList.add("sliderDisplay");

    //ADDS LAST BOOK FROM THE ARRAY
    let last = libArray.length - 1;
    bookDisplay.append(bookContainer);
    bookContainer.append(bookTitle, deleteBtn, bookAuthor, bookPages, bookHasRead);
    bookHasRead.append(read, switchBtn);
    switchBtn.append(checkbox, slider);

    bookContainer.setAttribute("data-id", arrayIndex);
    arrayIndex += 1;
    deleteBtn.innerHTML = "&times;"
    bookTitle.innerText = libArray[last].title;
    bookAuthor.innerText = "Author: " + libArray[last].author;
    bookPages.innerText = "Pages: " + libArray[last].pages;
    read.innerText = "Have read book:"
    if(libArray[last].status == true) {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }

    let booksOnDisplay = document.querySelectorAll(".bookContainer");
    booksOnDisplay.forEach(display => {
        display.addEventListener("click", findObjectIndex)
    });

    let deleteBtnFnc = document.querySelectorAll(".deleteBtn");
    deleteBtnFnc.forEach(button => {
        button.addEventListener("click", deleteBookFromDisplay);
    })
}

//FINDING THE OBJECT'S WHCIH READ STATUS HAS BEEN CHANGED
function findObjectIndex (e) {
    if(e.target && e.target.nodeName == "INPUT") {
        let affectedObject = this.getAttribute("data-id");
        myLibrary[affectedObject].readStatus();
    }
}

//LIBRARY DELETE BOOK FUNCTIONALITY
let deleteIndex = 0;

function deleteBookFromDisplay (e) {
    let libArray = myLibrary;
    let deletingBookDisplay = e.path[1];
    deleteIndex = e.path[1].getAttribute("data-id");

    deletingBookDisplay.remove();
    libArray.splice(deleteIndex, 1);

    let currentBooks = document.querySelectorAll(".bookContainer");
    updateDisplayIndex(currentBooks, deleteIndex);

    return myLibrary = libArray;
    
}

//UPDATING THE CURRENT BOOKS DATA ATTRIBUTE WHEN A BOOK IS DELETED
function updateDisplayIndex(currentBookList, lastBookDeletedIndex) {
    for (let i = lastBookDeletedIndex; i < currentBookList.length; i++) {
        currentBookList[lastBookDeletedIndex].setAttribute("data-id", lastBookDeletedIndex);
        lastBookDeletedIndex++;
    }
}

//MODAL FUNCTIONALITY
const modal = document.getElementsByClassName("modal")[0];
const addBookBtn = document.querySelector(".addBook");
const closeBtn = document.querySelector(".closeBtn");

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
