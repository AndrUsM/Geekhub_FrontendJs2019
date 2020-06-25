const arrays = {}
arrays.sum = (array) => {
    // return array.reduce((total, value) => {
    //     return (total + value)
    // })
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}
// Min
arrays.min = (array) => {
    let min = array[0]
    for(let i = 0; i < array.length; i++){
        min = (array[i] < min) ? array[i] : min
    }
    return min
}
// Max
arrays.max = (array) => {
    let max = array[0]
    for(let i = 0; i < array.length; i++){
        max = (array[i] > max) ? array[i] : max
    }
    return max
}
// Replace methods
arrays.replace = {}
arrays.replace.min = (array, value) => {
    let index = array.indexOf(arrays.min(array))
    array[index] = value
    return array
}
arrays.replace.max = (array, value) => {
    let index = array.indexOf(arrays.max(array))
    array[index] = value
    return array
}
// Function with callback in argument
function func_with_callback(num) {
    if (num <= 1) return 1;
  
    return func_with_callback(num - 1) + func_with_callback(num - 2);
  }

console.log(func_with_callback(2))
// Function that replace all number dividing three with foo
const mutches = {}
mutches.find = (str1, str2) => {
    // Str to Lowercase
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    // Split array and remove repeated elements
    let data = {
        str_1: mutches.unique(str1),
        str_2: mutches.unique(str2)
    }
    let index_of_mutches = 0
    // Get longer array
    let longer_array = data.str_1.length > data.str_2.length? data.str_1 : data.str_2;
    let shorter_array = data.str_1.length < data.str_2.length? data.str_1 : data.str_2;
    for(let i in longer_array){
        if(longer_array.includes(shorter_array[i])){
            index_of_mutches++
            console.log(`${longer_array[i]}:${shorter_array[i]}, ${index_of_mutches}`)
        }
    }
    // Get length of longer string
    let length = data.str_1.length > data.str_2.length ? data.str_1.length : data.str_2.length
    return `${(index_of_mutches/length).toPrecision(3) * 100}%`
}
mutches.unique = (array) => {
    let seen = {};
    return array.split('').filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}
// Replace number: foo, bar, foobar
const replace = {}
replace.replace = (array, key) => {
    switch (key) {
        case 'foo':
            replace.additional.foo(array)
            break;
        case 'foo':
            replace.additional.bar(array)
            break;
    
        default:
            break;
    }
}