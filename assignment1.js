/*
Assignment 1
Task 1: Create a constructor function for the Book object with properties for title, author, and pages
Task 2: Implement a method w/in the Book object to display book information
Task 3: Create an array to store book objects
-implement functions to add new books and search for books by title or author
Task 4: Create functions that utilize "filter" to filter out books that contain more than 100 pages
-map method to add "Title:" and "Author" to the book's title and author properties
*/

//Task 1
function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

 //Task 2
Book.prototype.details = function() {
    console.log("-Title:", this.title, "\n-Author:", this.author, "\n-Pages:", this.pages)
}

let lotr = new Book("Lord of the Rings", "Tolkien", 450);
let hungryCatepillar = new Book("The Very Hungry Catepillar",  "Eric Carle", 20);

console.log(lotr)
console.log(hungryCatepillar)

lotr.details();

hungryCatepillar.details();

//Task 3
bookObj = []

function addBook(book) {
    bookObj.push(book);
}

function searchTitle(name) {
    const result = bookObj.find(({title}) => title === name);
    console.log(result);
}
   

addBook(lotr);
addBook(hungryCatepillar);
console.log(bookObj);

searchTitle("Lord of the Rings");
searchTitle("The Very Hungry Catepillar")

// Task 4