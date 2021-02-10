const book = {
    bookName: 'Learn To Code',
    author: 'Adi Levy',
    publishYear: 2021,
    pages: 100,
}

function getBook (book) {
    return `The book "${book.bookName}" was written by ${book.author} in
    the year ${book.publishYear}`
}
console.log(getBook(book));