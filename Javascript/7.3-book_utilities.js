const myBook1 = {
    bookName: 'Homo Deus',
    author: 'Yuval Noah Harari',
    year: 2016,
}
const myBook2 = {
    bookName: 'Predictably Irrational',
    author: 'Dan Ariely',
    year: 2008,
}
const bookUtils = {
    getFirstPublished: function (arg1,arg2) {
        return arg1.year < arg2.year ? arg1.bookName : arg2.bookName;
    },
    setNewEdition: function(book,editionYear) {
        return book.year < editionYear ? book.newEdition = editionYear : '';
    },
    setLanguage: function(book,language) {
        return book.language = language;
    },
    setTranslation: function (book,language,translator) {
        return book.translation = {
            language,
            translator,
        }
    },
    setPublisher: function (book,name,location) {
        return book.publisher = {
            name,
            location,
        }
    },
    isSamePublisher: function (book1,book2) {
        if (book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location) {
            return 'The publisher name and the location is identical'
        } else {
            return 'Not the same'
        }
    },
};
bookUtils.getFirstPublished(myBook1,myBook2);
bookUtils.setNewEdition(myBook1,2018);
bookUtils.setLanguage(myBook1,'Hebrew');
bookUtils.setTranslation(myBook1,'Hebrew','Adi');
bookUtils.setPublisher(myBook1,'Yediot Aharonot','Tel-Aviv');
bookUtils.setPublisher(myBook2,'Kineret','Tel-Aviv');

console.log(myBook1);

