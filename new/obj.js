const container =  document.querySelector(".container");
//container.textContent="Hello World";

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

function magicDiv(magicText){
    const mydiv = document.createElement("div");
    mydiv.textContent=magicText;
    return mydiv;

}

const book1 = new Book("Harry Potter", "J.K Rowling", 326, false);
const mybookStatus = document.createElement("div");
//mybookStatus.textContent(book1.info());

container.appendChild(magicDiv(book1.info()));
console.log(book1.valueOf());
container.appendChild(magicDiv(JSON.stringify(book1.valueOf())));
container.appendChild(magicDiv(book1.hasOwnProperty('valueOf')));
container.appendChild(magicDiv(Object.prototype.hasOwnProperty('hasOwnProperty')));
