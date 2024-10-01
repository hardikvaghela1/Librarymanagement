// Library Management 
//book interface and class
interface Book{
  title:string;
  author:string;
  publishedYear:number;
  availableCopies:number;

  }  

class Book{
    title:string;
    author:string;
    publishedYear:number;
    availableCopies:number;

    constructor(t:string,a:string,y:number,c:number){
        this.title=t;
        this.author=a;
        this.publishedYear=y;
        this.availableCopies=c;
    }

        // bookfunc():string{
        // return `The book title is ${this.title} and author is ${this.author}. Published yera is ${this.publishedYear} and available copies for sale are ${this.availableCopies}.`
}

//library interface and classes

interface library{
     addBook(book:Book):void;
     getBooksByAuthor(author:string):Book[];
     borrowBook(title: string): boolean;
}

class  Library{
  private books:Book[];

  constructor(){
    this.books=[];
  }
  
  addBook(book:Book):void{
    this.books.push(book);
  }

  getBookByAuthor(author:string):Book[]{
    return this.books.filter((book) => book.author === author);
  }

  borrowBook(title: string): boolean {
    const book = this.books.find((book) => book.title === title);
    if (book && book.availableCopies > 0) {
      book.availableCopies--;
      return true;
    }
    return false;
  }

}

//storage using generic
class storage<T>{
  private items:T[];

  constructor(){
    this.items=[];
  }

  add(item:T):void{
    this.items.push(item);
  }

  getall():T[]{
    return this.items;
  }
}

const library = new Library();
const bookStorage = new storage<Book>();

const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960, 5);
library.addBook(book1);
bookStorage.add(book1);

const book2 = new Book('1984', 'George Orwell', 1949, 3);
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