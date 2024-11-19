/*
Assignment 1
Task 1: Create a constructor function for the Book object with properties for title, author, and pages
Task 2: Implement a method w/in the Book object to display book information
Task 3: Create an array to store book objects
-implement functions to add new books adn search for books by title or author
Task 4: Create functions that utilize "filter" to filter out books that contain more than 100 pages
-map method to add "Title:" and "Author" to the book's title and author properties
*/

//Task 1
function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    //Task 2
    details = function() {
        console.log("Title:", this.title, "Author:", this.author, "Pages:", this.pages)
    }
}

//Task 3
let books = []

function addBook(title, author, pages) {
    books.push(new Book(title, author, pages));
}

function searchAuthor(name) {
    console.log(books.filter(author => Book.author=name));
}

function searchTitle(title) {
    console.log(books.filter(title => Book.title=title));
}

//Task 4
function filterByPages(number) {
    books.filter(Book.pages.number);
}

function addTitle(title) {
    books.map(title => Book.title=title);
}

function addAuthor(name) {
    books.map(name => Book.author=name);
}

addBook("Lord of the Rings", "Tolkien", 460);

console.log(books);
searchAuthor("Tolkien");
searchTitle("Lord of the Rings");
