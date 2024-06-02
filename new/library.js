const myLibrary = [];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        let readStatus = this.isRead ? "finished reading" : "Not Read Yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
}

function addBookToLibrary() {
    // do stuff here
  }

const btn = document.querySelector("#btn-add-book");
btn.addEventListener("click", function (e) {
    console.log(e.target);
    console.log("We get this too on every click");
  });