const classes = {}
classes.makeCircle = {}
classes.makeCircle.Rectangle = class Rectangle {
    constructor(sideA, sideB){
        this.sideA = sideA
        this.sideB = sideB
    }
    get area(){
        return this.sideA * this.sideB
    }
    get perimentr(){
        return (this.sideA + this.sideB) * 2;
    }
}
classes.makeCircle.Circle = class Circle {
    constructor(radius){
        this.radius = radius
    }
    get area(){
        return Math.pow(this.radius,2)  * Math.PI
    }
    get perimeter(){
        return 2 * this.radius * Math.PI;
    }
}


// Task 2
class Challenge {
    constructor(id, level){
        this.points = 0
        this.id = typeof id == 'number'? id : ''
        this.level = typeof level == 'string' && level.trim().length == 2 ? level.trim().toUpperCase() : ''
        if(!this.id || !this.level){
            console.log('Error in asign data')
        }
    }
    points(){
        switch (this.level) {
            case "VE":
                this.points = 5
                return 5
            case "EA":
                this.points = 10
                return 10
            case 'ME':
                this.points = 20
                return 20
            case 'HA':
                this.points = 40
                return 40
            case 'VH':
                this.points = 80
                return 80
            case 'EX':
                this.points = 120
                return 120
            default:
                break;
        }
    }
}
class User {
    constructor(name, xp, log){
        this.name = name
        this.xp = xp
        this.log = log
    }
    newSolvedChallenge(challange){
        this.xp += challange.points()
				this.log.push(challange.id)
    }
}


// Users
user1 = new User('Madam', 0, [])
user2 = new User('Steve', 0, [])

// Challenges
challenge1 = new Challenge(1, 'VE')
challenge2 = new Challenge(2, 'EA')
challenge3 = new Challenge(3, 'ME')
challenge4 = new Challenge(4, 'HA')
challenge5 = new Challenge(5, 'VH')
challenge6 = new Challenge(6, 'EX')

// Madam
user1.newSolvedChallenge(challenge1)
user1.newSolvedChallenge(challenge4)
user1.newSolvedChallenge(challenge6)

// Steve
user2.newSolvedChallenge(challenge5)
user2.newSolvedChallenge(challenge3)
user2.newSolvedChallenge(challenge2)

// Task 3
class Book {
    constructor(title, author){
        this.title = title
        this.author = author
    }
    getTitle(){
        return `Title: ${this.title}`
    }
    getAuthor(){
        return `Author: ${this.author}`
    }
}
HP = new Book("Harry Potter", "J.K. Rowlong")
H = new Book("Hamlet", "William Shakespeare")
WP = new Book('War and Peace', 'Leo Tolstoy')
PP = new Book('Pride and Prejudice', 'Jane Austen')


class StackCalc {
    constructor(str)
}