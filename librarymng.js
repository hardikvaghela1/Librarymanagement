var Book = /** @class */ (function () {
    function Book(t, a, y, c) {
        this.title = t;
        this.author = a;
        this.publishedYear = y;
        this.availableCopies = c;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.getBookByAuthor = function (author) {
        return this.books.filter(function (book) { return book.author === author; });
    };
    Library.prototype.borrowBook = function (title) {
        var book = this.books.find(function (book) { return book.title === title; });
        if (book && book.availableCopies > 0) {
            book.availableCopies--;
            return true;
        }
        return false;
    };
    return Library;
}());
//storage using generic
var storage = /** @class */ (function () {
    function storage() {
        this.items = [];
    }
    storage.prototype.add = function (item) {
        this.items.push(item);
    };
    storage.prototype.getall = function () {
        return this.items;
    };
    return storage;
}());
var library = new Library();
var bookStorage = new storage();
var book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960, 5);
library.addBook(book1);
bookStorage.add(book1);
var book2 = new Book('1984', 'George Orwell', 1949, 3);
library.addBook(book2);
bookStorage.add(book2);
console.log(library.getBookByAuthor('Harper Lee'));
console.log(library.borrowBook('To Kill a Mockingbird')); // true
console.log(library.borrowBook('To Kill a Mockingbird')); // true
console.log(library.borrowBook('To Kill a Mockingbird')); // true
console.log(library.borrowBook('To Kill a Mockingbird')); // true
console.log(library.borrowBook('To Kill a Mockingbird')); // true
console.log(library.borrowBook('To Kill a Mockingbird')); // false
console.log(bookStorage.getall());

