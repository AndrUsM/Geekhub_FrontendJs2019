const arrays = {}
arrays.toArray = (obj) => {
    return Object.entries(obj)
}
arrays.changeEnough = (change, amountDue) => {
    let a = change[0]*0.25;
	a += change[1]*0.1;
	a += change[2]*0.05;
	a += change[3]*0.01;
	return a >= amountDue;
}
arrays.arrayOfMultiples = (num, length) => {
    let array = []
    for(let i = 1; i <= length; ++i) array.push(num*i)
    return array
}
arrays.testJackpot = (result) => {
    return (new Set(result)).size === 1  ? true : false
}
arrays.indexMultiplier = (arr) => {
    let resoult = 0
    arr.map((value, index) => {
        resoult += value*index
    })
    return resoult
}
arrays.progressDays  = (runs) => {
    return runs.filter((e,i,a)=>e<a[i+1]).length;
}
arrays.removeDups = (arr) => {
    return Array.from(new Set(arr))
}
arrays.capMe = (arr) => {
    return arr.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
}
arrays.evenOddTransform = (arr, n) => {
    return arr.map(x => (x % 2 == 0) ? x - 2 * n : x + 2 * n)
}
arrays.flatten = (arr) => {
    return [].concat(...arr)
}
arrays.uniqueSort = (arr) => {
    return Array.from(new Set(arr)).sort((a, b) => { return a - b })
}
arrays.numOfSubbarrays = (arr) => {
    return arr.filter(a => a instanceof Array).length
}
arrays.sumTwoSmallestNums = (arr) => {
    return arr.filter((item) => item >= 0)
        .sort((a, b) => a - b)
        .slice(0, 2)
        .reduce((acc, item) => acc + item);
}
arrays.reverseImage = (image) => {
    return image.map(value => value.map(element => element === 0 ? 1 : 0))
}
arrays.incrementToTop = (arr) => {
    return arr.reduce((accumulator, value) => {
        return accumulator + Math.max(...arr) - value
    }, 0)
}
arrays.generatePalindromes = () => {
    let max = 999999;
    let min = 984000;
    let container = [].toString().split(",");
    let filtered = [];
    
    for (let i=min; i<max; i++) {
    container.push(i);
    }
    for (let x=1; x<container.length; x++) {
     if (container[x].toString() === container[x].toString().split("").reverse().join("")) {
                    filtered.push(container[x]);
    }
    }
    return filtered;
}
arrays.matrix = (x, y, z) => {
    return Array(x).fill().map(value => Array(y).fill(z))
}
arrays.upwardTrend = (array) => {
    return array.some(a => (typeof a) == 'string') ? 'Strings not permitted!'
    : array.every((b, i, array) => i > 0 ? b > array[i - 1] : true)
}
arrays.puzzlePieces = (a1, a2) => {
    let sum = []
    if(a1.length == a2.length){
        for(let i = 0; i < a1.length; ++i){
            sum.push(a1[i] + a2[i])
        }
        if(Array.from(new Set(sum)).length == 1) return true
        else return false
    }else{
        return false
    }
}
arrays.uniqueArr = (arr) => {
    let positive_array = []
    arr.map(value => {
        if(value > 0) positive_array.push(value)
    })
    return Array.from(new Set(positive_array))
}
arrays.wordBuilder = (letters, positions) => {
	res = []
	positions.forEach((p,i) => (res[p] = letters[i]))
	return res.join("");
}
arrays.nextInLine = (arr, num) => {
    return (arr || []).length === 0 ? "No array has been selected" :
	arr.slice(1).concat(num);
}
arrays.sumOfEvens = (arr) => {
    return arr.map(arr => arr.
        filter(n => n%2===0).
        reduce((a,n)=> a+n,0)).
        reduce((a,n) => a+n,0)
}
arrays.removeSmallest = (arr) => {
    let lowest = Math.min(...arr);
    arr.splice(arr.indexOf(lowest), 1);
    return arr;
}
arrays.mapping = (arr) => {
	const obj = {}
	arr.forEach(el => obj[el] = el.toUpperCase())
	return obj
}
arrays.matchLastItem = (arr) => {
    let comparation_element = ''
    arr.map((value, index) => {
        if(index < arr.length - 1){
            comparation_element += value.toString()
        }
    })
    if(arr[arr.length - 1].toString() == comparation_element) return true 
    else return false
}
arrays.concat = (...arr) => {
    return [].concat(...arr)
}
arrays.moveToEnd = (arr, element) => {
    return arr.sort((a)=>a==el?1:-1)
}
arrays.probability = (arr, num) => {
	return +((((arr.filter(a => a >= num).length))
		/(arr.length)*100).toFixed(1));
}
arrays.median = (arr) => {
    let sorted = arr.sort((a,b) => { return a - b })
    let m1 = sorted[Math.floor((this.length+1)/2)-1]
    let m2 = sorted[Math.ceil((this.length+1)/2)-1]
    return +((m1+m2)/2).toFixed(1)
}
arrays.simonsSays = (arr1, arr2) => {
    arr2.slice(1).every((num, i) => num === arr1[i]);
}
arrays.cumulativeSum = (arr) => {
    let sum = 0
    return arr.map(value => sum += value)
}
arrays.digitDistance = (num1, num2) => {
    let a1 = num1.toString().split('')
    let a2 = num2.toString().split('')
    let sum = 0
    if(a1.length == a2.length){
        for(let i = 0; i < a1.length; ++i){
            sum += (a1[i] - a2[i])
        }
    }else{
        return 0
    }
    return Math.abs(sum)
}
arrays.squarePatch = (n) => {
	if(n == 0){ return []; }
	return new Array(n).fill(new Array(n).fill(n));
}
arrays.getDiagonals = (arr) => {
	var d1 = arr.map((x, i) => x[i]);
	var d2 = arr.map((x, i) => x[x.length-1-i]);
	return [d1, d2];
}
arrays.letterCounter = (arr, letter) => {
    return arr.reduce((xi,x)=>xi.concat(x),[])
        .filter(x=>x === letter).length;
}
arrays.tidyBooks = (...books) => {
    return books.map((book,index) => 
        book[0].trim().split("-")
        .map(x => x.trim())
    )
}
arrays.partiallyHide = (str) => {
    return str.replace(/\B\w\B/g, "-");
}
arrays.magnitude = (arr) => {
    // return arr.hypot()
    return Math.sqrt(
        arr.map(x => x * x)
            .reduce((accumulator, value) => accumulator + value , 0)
    )
}

// Right-, -Left Shift
arrays.leftShift = (arr, num) => {
    const { length } = arr
    const cut = num % num
    return arr.slice(cut).concat(arr.slice(0, cut))
}
arrays.rightShift = (arr, num) => {
    const { length } = arr
    const cut = length - (num % length)
    return arr.slice(cut).concat(arr.slice(0, cut))
}

arrays.subset = (set1, set2) => {
    return set1.every(num => set2.includes(num))
}
arrays.mergeArrays = (a, b) => {
    let arr = [];
    for (let i = 0; i < a.concat(b).length; i++) {
      if(a[i]) arr.push(a[i]);
      if(b[i]) arr.push(b[i]);
    }
    return arr;
}

const convert = (month_number) => {
    const month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    month_number = typeof month_number == 'number'? +month_number : false;
    return month_name[month_number]
}

arrays.zodiacSymbol = (str) => {
    const SYMBOLS = ["♈", "♉", "♊", "♋", "♌", "♍",
								 "♎", "♏", "♐", "♑", "♒", "♓"];
	const day = new Date(str).getDate()
	const month = new Date(str).getMonth() + 1
	switch (month) {
		case 3:
			if (day >= 21) return SYMBOLS[0]
			else return SYMBOLS[11]
		case 4:
			if (day >= 21) return SYMBOLS[1]
			else return SYMBOLS[0]
		case 5:
			if (day >= 22) return SYMBOLS[2]
			else return SYMBOLS[1]
		case 6:
			if (day >= 22) return SYMBOLS[3]
			else return SYMBOLS[2]
		case 7:
			if (day >= 23) return SYMBOLS[4]
			else return SYMBOLS[3]
		case 8:
			if (day >= 23) return SYMBOLS[5]
			else return SYMBOLS[4]
		case 9:
			if (day >= 24) return SYMBOLS[6]
			else return SYMBOLS[5]
		case 10:
			if (day >= 24) return SYMBOLS[7]
			else return SYMBOLS[6]
		case 11:
			if (day >= 23) return SYMBOLS[8]
			else return SYMBOLS[7]
		case 12:
			if (day >= 22) return SYMBOLS[9]
			else return SYMBOLS[8]
		case 1:
			if (day >= 21) return SYMBOLS[10]
			else return SYMBOLS[9]
		case 2:
			if (day >= 20) return SYMBOLS[11]
			else return SYMBOLS[10]
	}
}

Array.prototype.replace = function(t, v) {
    if (this.indexOf(t)!= -1)
        this[this.map((e, i) => [i, e]).filter(e => e[1] == t)[0][0]] = v;
};
// No pass test
arrays.nearestElement = (arr, compare_number) => {
    let resoult = []
    resoult.push(Math.min(...arr.filter(x => x > compare_number)))
    resoult.push(Math.max(...arr.filter(x => x < compare_number)))

    resoult.replace(Infinity, 0)
    resoult.replace(-Infinity, 0)

    return Math.min(...resoult)
}

arrays.miniPeaks = (arr) => {
    return arr.filter((value,index,array) =>
        value > array[index - 1] && 
        value > array[index + 1])
}

arrays.pointsInCircle = (points,centerX, centerY, radius ) => {
    return points.filter(point => {
        return Math.hypot(point.x - centerX, point.y - centerY) < radius;
    }).length;
}

arrays.rangedReversal = (arr, start, end) => {
    let prev = arr.slice(0, start)
    let reserved = arr.slice(start, end + 1).reverse()
    let next = arr.slice(end + 1)
    return [...prev, ...reserved, ...next]
}
arrays.schoty = frame => {
    return +frame.map(x => x.indexOf("-")).join("")
}
arrays.accumulatingArray = (arr) => {
    let sum = 0
    return arr.map(value => (sum += value))
}
arrays.getStudentTopNotes = (students) => {
    // let resoult = []
    // students.map(value => {
    //     resoult.push(Math.max(...value.notes))
    // })
    // return resoult
    return students.map(x => Math.max(...x.notes, 0))
}
arrays.partition = (str, separator) => {
    let copy = [...str]
    let arr = []
    while(copy.length > 0)
        arr.push(copy.splice(0, separator).join(''))    
    return arr
}