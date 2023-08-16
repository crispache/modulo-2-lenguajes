console.log("************** DELIVERABLE 04 *********************");

interface Book {
    title: string;
    isRead: boolean;
}

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
   /*  { title: "Canción de hielo y fuego", isRead: true }, */ 
   // NOTA:  si estuviera duplicado y usara filter me devolvería todos los q cumple esa condición, >> find
];


const isBookRead = (books: Book[], titleToSearch: string): boolean => {
    const book = books.find( (book) => book.title === titleToSearch)
    return book?.isRead ? book.isRead : false;
}


console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false