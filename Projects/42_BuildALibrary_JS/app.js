/*
	Owner: Joaquín Paz
	Year: 2022
	Description: A parent Media class extended by various sub classes to practice inheritance.
*/
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = []
    }
    get title() {
        return this._title
    }
    get isCheckedOut() {
        return this._isCheckedOut
    }
    get ratings() {
        return this._ratings
    }
    set isCheckedOut(boolean) {
        if (typeof boolean !== 'boolean') return
        this._isCheckedOut = boolean
    }
    getAverageRating() {
        if (this._ratings.length < 1) return 'No ratings yet'
        return this._ratings.reduce((prev, curr) => prev + curr, 0) / this._ratings.length
    }
    toggleCheckOutStatus() {
        if (this._isCheckedOut) {
            this._isCheckedOut = false
        } else {
            this._isCheckedOut = true
        }
        return 'Updated Checkout Status: ' + this._isCheckedOut + ' for ' + this._title
    }
    addRating(rating) {
        this._ratings.push(rating)
    }
}
class Book extends Media {
    constructor(title, author, pages) {
        super(title)
        this._author = author
        this._pages = pages
    }
    get author() {
        return this._author
    }
    get pages() {
        return this._pages
    }
}
class Movie extends Media {
    constructor(title, director, runTime) {
        super(title)
        this._director = director
        this._runTime = runTime
    }
    get director() {
        return this._director
    }
    get runTime() {
        return this._runTime
    }
}
class CD extends Media {
    constructor(title, artist, songs) {
        super(title)
        this._artist = artist
        this._songs = songs
    }
    get artist() {
        return this._artist
    }
    get songs() {
        return this._songs
    }
}
const testBook = new Book('Harry Potter', 'JK Rowling', 309)
const testMovie = new Movie('Terror deep', 'Michael Bay', 185)
const testCD = new CD('Living on a prayer', 'Bon Jovi', ['you give love a bad name', 'i will always love you', 'bed of roses'])

console.log(
    `${testBook.author}, ${testBook.pages} \n${testMovie.director}, ${testMovie.runTime}\n${testCD.artist}, ${testCD.songs}`
)