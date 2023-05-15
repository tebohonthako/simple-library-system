// S I M P L E   L I B R A R Y   S Y S T E M

// Constructor function
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

function Author(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.books = [];
}

// Adding a method to the Author prototype called addBook ,
// The addBook method takes Book object as a parameter
// & adds the parameter to the books array of the Author.
//////////////////////////////////
Author.prototype.addBook = function (book) {
  this.books.push(book);
};

// Creating a few Author and Book Objects
//To represent Authors and Their books in the Library.

const author1 = new Author("Robert", "Kiyosaki");
const book1 = new Book("Rich Dad, Poor Dad", author1, 1997);
author1.addBook(book1);

const author2 = new Author("Jordan", "Peterson");
const book2 = new Book("12 Rules of life", author2, 2018);
author2.addBook(book2);

const author3 = new Author("Oprah", "Winfrey");
const book3 = new Book(
  "What Happened to you? Conversations on trauma",
  author3,
  2021
);
author3.addBook(book3);

////////////////////////////
// Displaying Authors and their books to the console.

console.log(
  author1.firstName + " " + author1.lastName + " books:",
  author1.books
);
console.log(
  author2.firstName + " " + author2.lastName + " books:",
  author2.books
);
console.log(
  author3.firstName + " " + author3.lastName + " books:",
  author3.books
);
