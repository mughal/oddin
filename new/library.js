
const myLibrary = [
  { title: "1984", author: "George Orwell", pages: 328, isRead: true },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, isRead: true },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 218, isRead: false },
  { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", pages: 417, isRead: false },
  { title: "A Passage to India", author: "E.M. Forster", pages: 368, isRead: true },
  { title: "Invisible Man", author: "Ralph Ellison", pages: 581, isRead: false },
  { title: "Don Quixote", author: "Miguel de Cervantes", pages: 863, isRead: true },
  { title: "Beloved", author: "Toni Morrison", pages: 324, isRead: true },
  { title: "Mrs. Dalloway", author: "Virginia Woolf", pages: 194, isRead: false },
  { title: "Wuthering Heights", author: "Emily Bronte", pages: 418, isRead: true }
];



function magicDiv(magicText, divClass){
  const mydiv = document.createElement("div");
  mydiv.classList.add(divClass); 
  mydiv.textContent=magicText;
  return mydiv;
}

/*  class="book-title">
class="book-author">
class="book-pages">
class="book-read">
class="book-del"
    <button type="button" id="btn-del-book"> Delete</button>
 */
function bookCard(book, bookIndex){
  const bookCardDiv = document.createElement("div");
  const titleDiv = magicDiv(book.title, "book-title" );
  const pagesDiv = magicDiv(book.pages, "book-pages" );
  const authorDiv = magicDiv(book.author, "book-author" );
  const isReadDiv = magicDiv(book.isRead, "book-read" );
  bookCardDiv.classList.add('book-card'); 
  bookCardDiv.setAttribute('data-index', bookIndex);
  bookCardDiv.appendChild(titleDiv);
  bookCardDiv.appendChild(pagesDiv);
  bookCardDiv.appendChild(authorDiv);
  bookCardDiv.appendChild(isReadDiv);
  return bookCardDiv;
}

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

  function displayLibrary(){
    const bookShelf = document.querySelector(".bookshelf");
    myLibrary.forEach((book, index) => {
      const mybookCard = bookCard(book, index);
  
      bookShelf.appendChild(mybookCard);
  });
  }

  displayLibrary();
