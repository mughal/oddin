
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


  const showButton = document.getElementById("showDialog");
  const bookDialog = document.getElementById("bookDialog");
  const confirmBtn = bookDialog.querySelector("#confirmBtn");
  
  // "Show the dialog" button opens the <dialog> modally
  showButton.addEventListener("click", () => {
    bookDialog.showModal();
  });
  
 
  // "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
  bookDialog.addEventListener("close", (e) => {
    outputBox.value =
    bookDialog.returnValue === "default"
        ? "No return value."
        : `ReturnValue: ${bookDialog.returnValue}.`; // Have to check for "default" rather than empty string
  });
  
  // Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    bookDialog.close(); // Have to send the select box value here.
  });
  
 // displayLibrary();
  function makeAdding (firstNumber) {
    // "first" is scoped within the makeAdding function
    const first = firstNumber;
    return function resulting (secondNumber) {
      // "second" is scoped within the resulting function
      const second = secondNumber;
      return first + second;
    }
  }
  // but we've not seen an example of a "function"
  // being returned, thus far - how do we use it?
  
  const add5 = makeAdding(5);
  console.log(add5(2)) // logs 7
  
  const User = function(name) {
    this.name = name;
    this.discordName = "@" + name;
  }

  
  const user1 = new User("Yasir");
  console.log(user1);
  
  // function createUser (name) {
  //   const discordName = "@" + name;
  //   return {name, discordName};
  // }

  // const user2 = createUser("factoryAli");
  // console.log(user2);

  // const name = "Fancy Way";
  // const age = 29;
  // const fancyObj = {name, age};
  // console.log(fancyObj);



  // // Learn Deconstructing

  // const obj = {a: 10, b: 20, c: 30};
  // const { a:x, b:y } = obj;
  // console.log(`x = ${x} and y = ${y}`);

  function createUser (name) {
    const discordName = "@" + name;
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return { name, discordName, getReputation, giveReputation };

  }

  