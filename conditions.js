const conditions = {}
conditions.X0 = (str) => {
    let x = (str.match(/x/gi) || []).length
    let o = (str.match(/o/gi) || []).length
    return x == o
}
conditions.getFirstValue = (arr) => {
    return arr[0] || []
}
conditions.equal = (a,b,c) => {
    const length = new Set([a,b,c]).size
    return length === 3 ? 0 : 4 - length    
}
conditions.hackerSpeak = (str) => {
    return str
    .replace(/e/g, "3")
    .replace(/i/g, "1")
    .replace(/a/g, "4")
    .replace(/o/g, "0")
    .replace(/s/g, "5");
}
conditions.count = (arr) => {
    let counter = 0
    arr = typeof arr == 'object' && arr.length ? arr : []
    arr.map(value => {
        if(new RegExp(/2|3|4|5|6/ig).exec(value)) counter++
        if(new RegExp(/7|8|9/gi).exec(value)) counter += 0
        if(new RegExp(/10|J|Q|K|A/g).exec(value)) counter -= 1
    })
    return counter
}
conditions.convert = (num) => {
    num = typeof num == 'number' ? num : 0;
    return parseInt(num) * 60;
}
conditions.triArea = (base, height) => {
    return (base * height) /2
}
conditions.countPosSumNeg = (arr) => {
    if(!arr.length) return []
    let data = {
        pos: [],
        neg: []
    }
    arr.map(value => {
        if(value < 0) data.neg.push(value)
        else data.pos.push(value)
    })
    return [
        data.pos.length,
        data.neg.reduce((accumulator, value) => {
            return accumulator + value
        })
    ]
}
conditions.flipEndChars = (str) => {
	if (typeof str !== 'string' || str.length < 2) {
        return 'Incompatible.';
    }  
    if (str[0] === str[str.length - 1]) {
        return "Two's a pair.";
    }
      
    let arr = str.split('');
    let tmp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = tmp;

    return arr.join('');
}
conditions.testFairness = (a, b) => {
    let data = {
        a: {
            sum: 0,
            buffer: []
        },
        b: {
            sum: 0,
            buffer: []
        }
    }
    // Multiply
    a.map(value => {
        data.a.buffer.push(value.reduce((accumulator, value) => {
            return accumulator * value
        }))
    })
    b.map(value => {
        data.b.buffer.push(value.reduce((accumulator, value) => {
            return accumulator * value
        }))
    })
    // Sum
    data.a.sum = data.a.buffer.reduce((accumulator, value) => {
        return accumulator + value
    })
    data.b.sum = data.b.buffer.reduce((accumulator, value) => {
        return accumulator + value
    })
    return data.a.sum == data.b.sum
}
conditions.days = (month, year) => {
	return new Date(year, month, 0).getDate();
}
conditions.split = (str) => {
    let a = str.match(/[aeiou]/gi);
    let b = str.match(/[^aeiou]/gi);
    return a.concat(b).join('');
}
conditions.flash = ([num1, op, num2]) => {
    const reduce = {
        '+': (n1, n2) => n1 + n2,
        '-': (n1, n2) => n1 - n2,
        'x': (n1, n2) => n1 * n2,
        '/': (n1, n2) => Number.isFinite(n1 /n2) ?
                         Number((n1 / n2).toFixed(2)) :
                         undefined
    }
    return reduce[op](num1, num2)
}
conditions.antiDivisors = (n) => {
    let anti = [];
	for (let i = 2; i < n; i++) {
		if (n % i && ((i % 2 === 0 && n * 2 % i === 0) || (i % 2 && ((n * 2 - 1) % i === 0 || (n * 2 + 1) % i === 0))))
			anti.push(i);
	}
	return anti;
}
conditions.assertSimilar = (...arr) => {
    return arr.filter(e=>{
        return (new Set(e)).size === 1  
    }).length
}
conditions.quadraticEquation = (a, b, c) => {
    let delta = b*b - 4 * a * c
	return a > 0 ? (-b + Math.sqrt(delta)) / (2*a) : (-b - Math.sqrt(delta)) / (2*a)
}
conditions.countAll = (str) => {
    let letter_regex = /^[A-Za-z]+$/
    let digit_regex = /^[0-9]+$/
    let data = {
        LETTERS: 0,
        DIGITS: 0
    }
    str.split('').map(value => {
        if(letter_regex.exec(value)) data.LETTERS++
        if(digit_regex.exec(value)) data.DIGITS++
    })
    return data
}
conditions.conjugate = (verb, pronoun) => {
	let ver = verb.slice(0, -3);
	switch (pronoun) {
		case 1: return 'Io ' + ver + 'o';
		case 2: return ver.endsWith('c') || ver.endsWith('g') ? 'Tu ' + ver + 'hi' : ver.endsWith('i') ? 'Tu ' + ver : 'Tu ' + ver + 'i';
		case 3: return 'Egli ' + ver + 'a';
		case 4: return ver.endsWith('c') || ver.endsWith('g') ? 'Noi ' + ver + 'hiamo' : ver.endsWith('i') ? 'Noi ' + ver + 'amo' : 'Noi ' + ver + 'iamo';
		case 5: return 'Voi ' + ver +'ate';
		default: return 'Essi ' + ver +'ano'; 
	}
}
conditions.golfScore = (course, resoult) => {
    const shots = {
        eagle: -2, 
        birdie: -1,
        bogey: 1,
        "double-bogey": 2,
        par: 0
    }
    let score = 0
    resoult.map((res, i) => {
        score+= course[i] + shots[res];
    })
    return score
}

conditions.everySome = (test, type, ...arr) => {
	if (type == "everybody") {
		return arr.every(x => eval(x + test))
	} else {
		return arr.some(x => eval(x + test))
	}
}
conditions.calculateScore = (...array) => {
    Abigail = 0
	Benson = 0
	for (let i =0; i < array.length; i++) {
		if (array[i][0] === "R" && array[i][1] === "S") Abigail ++
		if (array[i][0] === "S" && array[i][1] === "P") Abigail ++
		if (array[i][0] === "P" && array[i][1] === "R") Abigail ++
		if (array[i][0] === "S" && array[i][1] === "R") Benson ++
		if (array[i][0] === "P" && array[i][1] === "S") Benson ++
		if (array[i][0] === "R" && array[i][1] === "P") Benson ++
	}
    return Abigail === Benson ? "Tie" : Abigail > Benson ? "Abigail" : "Benson"
}
conditions.overTwentyOne = (array) => {
    let resoult = 0
    array.map(value => {
        if(new RegExp(/^[2-9]|10+$/).exec(value)){
            resoult += value
        }
        if(new RegExp(/K|J|Q|T/).exec(value)){
            resoult += 10
        }
    })
    return resoult > 21 ? true : false
}
conditions.encodeMorse = (str) => {
    const A = {
        'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
        'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
        'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
        'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
        'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
        'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
        'y': '-.--',  'z': '--..',  ' ': ' ', ',': '--..--',
        '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
        '9': '----.', '0': '-----', '!':'-.-.--', '.': '.-.-.-',
            '?': '..--..', ':': '---...', '\'': '.----.'
    };
    let out = '';
    for (let letter of str) {
        if (A[letter.toLowerCase()])
            out += (A[letter.toLowerCase()]) + ' ';
    }
    return out.trim();
}
conditions.check = (arr) => {
    let newArr = arr.slice(1)
    return  newArr.every((x,i)=> x - arr[i] > 0) ? 'increasing' :
            newArr.every((x,i)=> x - arr[i] < 0) ? 'decreasing' : 'neither'
}
conditions.howBad = (num) => {
    // return pop=[...(num >>> 0).toString(2)]
    //                         .filter(x=>x=='1').length
    //                         ,['Evil,Odious,'.repeat(100).split(',')[pop]]
    //                         .concat(pop>=2 ? Object.keys([...Array(pop)])
    //                         .slice(2).some(x=>Number.isInteger(pop/x)) ? 
    //                             null:['Pernicious']:null).filter(Boolean)
    const isPrime = t => {
        for(let i = 2, s = Math.sqrt(t); i <= s; i++)
            if(t % i === 0) return false; 
        return t > 1;
    }
        
    let binary = num.toString(2);
    let ones = [...binary].filter(e=>e==1).length;
    let arr=[];
        
    if(ones % 2 !==0) arr.push("Odious")
    if(ones % 2 ===0) arr.push("Evil")
    if(isPrime(ones)) arr.push('Pernicious') 
    return arr
}
conditions.alternatingCaps = (str) => {
    var caps = true
	return str.split('').map(word => {
		if (word === ' ') return ' ';
		if (caps === true) {
			caps = false
			return word.toUpperCase()
		} else {
			caps = true
			return word.toLowerCase()
		}
	}).join('')
}