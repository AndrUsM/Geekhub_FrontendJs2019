const conditions = {}, arrays = {}, loops = {}, objects = {}
conditions.task_1_factorial = (positive_number) => {
    positive_number = positive_number && positive_number >= 0 ? positive_number : 1;
    if(positive_number >= 0 && positive_number < 2) return 1
    else{
        return positive_number * factorial(positive_number-1);
    }
}
conditions.task_2_sayHi_sayBye = (name, num) => {
    // Check number: if true convert to integer type
    num = (num > -1 && num < 2) ? +num : console.error('Allowed values: 0, 1')
    name = name[0].toUpperCase() + name.slice(1, name.length)
    if(num === 0) return (`Bye ${name}`)
    if(num === 1) return(`Hello ${name}`)
}

let test_objects = {
    '1':{ "product": "Milk", price: 1.50 }, // true
    '2':{ "product": "Cheese", price: -1 }, // false
    '3':{ "product": "Eggs", price: 0 }, // true
    '4':{ "product": "Cerials", price: '3.0' } // false
}
conditions.task_3_hasValidPrice = (object) => {
    if(!object) return false
    let copy = object  
    // Check object
    copy.product = typeof object.product == 'string' ? true : false;
    copy.price = object.price > -1 && typeof (object.price) == 'number' ? true : false;
    console.log(copy)
    // Return value
    if(copy.product && copy.price) return true
    else return false
}

conditions.task_4_isSymmetrical = (number) => {
    let copy = typeof number == 'number'? `${number}`.split(''): false
    let comparable_values = {
        'one_part': '',
        'second_part': copy.slice(copy.length/2, copy.length)
                            .sort((a, b) => { return b-a })
                            .join("")
    }
    if(copy.length % 2 == 0){
        comparable_values.one_part = copy.slice(0,copy.length/2)
                                        .join("")
        comparable_values.second_part = copy.slice(copy.length/2, copy.length)
                                            .sort((a, b) => { return b-a })
                                            .join("")
    }else{
        comparable_values.one_part = copy.slice(0,copy.length/2)
                                        .join("")
        comparable_values.second_part = copy.slice(copy.length/2 + 1, copy.length)
                                            .sort((a, b) => { return b-a })
                                            .join("")
    }
    // Convert value to number and compare
    if(+comparable_values.one_part == +comparable_values.second_part) return true
    else return false
}

arrays.minMax = (array) => {
    let min = array.reduce((accumulator, value) => {
            return (accumulator < value? accumulator : value)
        })
    let max = array.reduce((accumulator, value) => {
        return (accumulator > value? accumulator : value)
    })
    return [min, max]
}
arrays.canNest = (arr1, arr2) => {
    let coincidences = []
    arr1.map(value => {
        console.log(value)
        if(arr2.includes(value)) coincidences.push(value)
    })
    if(coincidences.length) return false
    else return true
}
arrays.filterArray = (array) => {
    let numbers = []
    array.map(value => {
        if(typeof value == 'number') numbers.push(value)
    })
    return numbers
}
arrays.sumOfCubes = (array) => {
    let resoult = 0
    array.forEach(value => {
        resoult += Math.pow(value, 3)
    })
    return resoult
}
arrays.amplify = (number) => {
    number = number && number > 0 ? number: false
    let array = []
    for(let i = 1; i <= number; i++){
        if(i % 4 == 0) array.push(i*10)
        else array.push(i)
    }
    return array
}
arrays.set = (array) => {
    return Array.from(new Set(array))
}
arrays.charIndex = (string, search) => {
    let indexes = []
    let copy = string.split('')
    copy.forEach((value, index) => {
        if(value == search) indexes.push(index)
    })
    // Out
    if(!indexes.length) return undefined
    if(indexes.length == 1) return [indexes[0], indexes[0]]
    if(indexes.length > 1) return [indexes[0], indexes[indexes.length-1]]
}



arrays.toArray = (number) => {
    let output = []
	number = number.toString()
	for (let i = 0, len = number.length; i < len; i += 1) {
			output.push(+number.charAt(i));
	}
	return output
}
arrays.toNumber = (array) => {
    return +array.join("")
}
arrays.societyName = (array) => {
    let res = ''
    array.forEach(value => {
        res += (`${value}`.split('')[0]).toUpperCase()
    })
    return res.split('').sort().join("")
}

arrays.spelling = (string) => {
    let copy = `${string}`.split('')
    let res = []
    copy.forEach((value, index) => {
        res.push(copy.slice(0, index+1).join(""))
    })
    if(res.length) return res.splice(0, res.length)
    if(!res.length) return ''
}
arrays.findNemo = (string) => {
    let copy = string.split(' ')
    if(copy.includes('Nemo')) return (`I found Nemo at ${copy.indexOf("Nemo")+1}!`)
    else return "I can't find Nemo :("
}
arrays.chatroom = (array) => {
    function chatroomStatus(array) {
	    let res = ''
    if(!array.length) res = 'no one online';
    if(array.length < 3 && array.length){
        array.forEach(value => {
            res = value;
        })
        if(array.length == 2) res = `${array[0]} and ${array[1]}`
        res += ' online'
    }
    if(array.length >= 3){  
        array.forEach((value, index)=> {
            if(index == 0) res = value;
            if(index == 1) res += `, ${value}`
        })
        if(array.length > 2) res += ` and ${array.length - 2} more online`;
    }
    return res
}
}
arrays.isSpecialArray = (array) => {
    let res = []
    array.forEach((value, index) => {
        if(index % 2 == 0){
            if(value % 2 == 0) res.push(true)
            else res.push(false)
        }
        if(index % 2 != 0){
            if(value % 2 != 0) res.push(true)
            else res.push(false)
        }
    })
    if(res.includes(false)) return false
    else return true
}
arrays.getAbsSum = (array) => {
	if(array.length < 0) return
	if(array.length < 2 && array.length > 0) return Math.abs(array[0])
	if(array.length > 1){
		console.log(array.length)
		return array.reduce((accumulator, value) => {
    		return (Math.abs(accumulator) + Math.abs(value))
  	})
	}
}
arrays.countOnes = (array) => {
    let sub_arrays = [], amount = 0;
    array.forEach((value, index, array) => {
        sub_arrays = sub_arrays.concat(array[index].slice(''))
    })
    // Find and calculate <1>
    sub_arrays.find((value, index) => {
        if(value == 1) amount++;  
    })
    return amount
}
arrays.mauriceWins = (arr1, arr2) => {
    let data = {
        s: 0,
        m: 1,
        f: 2,
        count: 0
    }
    let resoult = []
    // Round 1,2,3
    arr1[data.s] > arr2[data.f] ? resoult.push(true) : resoult.push(false)
    arr1[data.m] > arr2[data.s] ? resoult.push(true) : resoult.push(false)
    arr1[data.f] > arr2[data.m] ? resoult.push(true) : resoult.push(false)
    // out resoult
    console.log(resoult.map(value => {
        if(value == true) data.count++
    }))
    if(data.count > 1) return true
    else return false
}
arrays.sortByLength = (array) => {
    return array.sort((a,b) => {
        return a.length - b.length
    })
}
arrays.isAvgWhole = (array) => {
    array = array.length ? array : false
    let avg = array.reduce((accumulator, value) => { return accumulator + value }) / array.length;
    if(avg === parseInt(avg)) return true
    else return false
}
arrays.totalVolume = (...array) => {
    // console.log(array)
    let copy = [], multiplied_array = [], resoult = []
    array.forEach((value, index) => {
        copy = copy.concat(array[index].join(""))
    })
    copy.forEach(value =>  {
        multiplied_array = value.split('').reduce((accumulator, val) => {
            return accumulator * val
        })
        resoult.push(multiplied_array)
    })
    return resoult.reduce((accumulator, value) => {
        return accumulator + value
    })
}
arrays.formatPhoneNumber = (array) => {
    array = array.length? array : false
    return `(${array.slice(0, 3).join('')}) ${array.slice(3, 6).join('')}-${array.slice(6, array.length).join('')}`
}
arrays.identicalFilter = (array) => {
    array = array.length ? array : false
    let resoult = []
    array.forEach((value) => {
        if(value.split('')[0] == Array.from(new Set(value.split('')))) resoult.push(value)
    })
    return resoult
}
arrays.findLargestNums = (array) => {
    let max = []
    array.forEach((value) => {
        max.push(value.reduce((accumulator, val) => {
            return accumulator > val? accumulator : val
        }))
    })
    return max
}
arrays.transformUpvotes = (string) => {
    let copy = string.split(' '), res = []
    copy.forEach((value) => {
       if(value.split('').includes('k')){
				 res.push(value.replace('k', '')*1000)
			 }else{
				 res.push(+value)
			 }
    })
    return res
}
arrays.factorChain = (array) => {
    let res = []
    array.map((value, index, _array) => {
        // console.log(index, value, value % array[0] == 0)
        if(value % _array[0] == 0) res.push(true)
        else res.push(false)
    })
    // Out
    if(res.includes(false)) return false
    else return true
}
arrays.sortNumsAscending = (array) => {
    if(!array || array == null) return []
    if(array.length == 1) return [array[0]]
    return array.sort((a,b) => {
        return a - b
    })
}

loops.binary = (number) => {
    return (number).toString(2)
}
// Factorial of positive number: ready
loops.firstVowel = (string) => {
    string = string.split('')
    let vowel_list = 'aeiouAEIOU'
    let res = []
    string.forEach((letter, index) => {
        vowel_list.split('').forEach(vowel => {
            if(letter == vowel) res.push(index)
        })
    })
    // out
    if(res.length){
        return res.reduce((accumulator, value) => {
            return accumulator < value ? accumulator : value
    })}
    else return 'No vowel in string'
}
loops.charCount = (char, string) => {
    string = string.split('')
    let res = []
    string.forEach((letter, index) => {
        char.split('').forEach(value => {
            if(letter == value) res.push(index)
        })
    })
    // out
    if(res.length) return res.length
    else return 0
}
loops.hashPlusCount = (string) => {
    let data = {
        hash: 0,
        plus: 0
    }
    string = string.replace(' ', '').split('')
    console.log(string)
    string.forEach((value, index) => {
        if(value == '#') data.hash++
        if(value == '+') data.plus++
    })
    return [data.hash, data.plus]
}
objects.maximumScore = (tileHand) => {
    let res = 0
    Object.entries(tileHand).forEach(([key, value]) => {
        res += value.score
    })
    return res
}

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


// CONSOLE
class Console {
    constructor(){
        this.history = []
    }
    log(...args){
        console.log(args)
    }
    history(){

    }
    clearHistory(){

    }
    history(){

    }
}

myConsole = new Console()
myConsole.log("sfdfs", "sdsd", () => {});