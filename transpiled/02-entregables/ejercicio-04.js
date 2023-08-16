console.log("************** DELIVERABLE 04 *********************");
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
    /*  { title: "Canción de hielo y fuego", isRead: true }, */
    // NOTA:  si estuviera duplicado y usara filter me devolvería todos los q cumple esa condición, >> find
];
var isBookRead = function (books, titleToSearch) {
    var book = books.find(function (book) { return book.title === titleToSearch; });
    return (book === null || book === void 0 ? void 0 : book.isRead) ? book.isRead : false;
};
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
