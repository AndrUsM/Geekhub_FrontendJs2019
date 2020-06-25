const scopes = {}
scopes.createTest = (a, b) => {
    if(typeof a == 'number' && typeof b == "number")
    return `Test.assertEquals(createTest(${a}, ${b}), ${JSON.stringify(a + b)})`
    if(typeof a == 'string' && typeof b == 'string'){
        return `Test.assertEquals(createTest(${JSON.stringify(a)}, ${JSON.stringify(b)}), ${JSON.stringify(a + b)})`
        }
    else if (typeof a[0] === "number") 
        return `Test.assertSimilar(createTest([${a}], [${b}]), [${a}, ${b}])`;
    else return `Test.assertSimilar(createTest(["${a}"], ["${b}"]), ["${a}", "${b}"])`;
}


scopes.smallestTransform = (num) =>  {
    let digits = JSON.stringify(num).split('').map(x => +x)
    let median = digits.sort((a, b) => a - b)[Math.floor(digits.length / 2)]
    return digits.reduce((accumulator, value) =>  { return accumulator + Math.abs(value - median)}, 0)
}
console.log(scopes.smallestTransform(699))