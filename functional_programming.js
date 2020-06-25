const functional_programming = {}
functional_programming.hackerSpeak = (str) => {
    return str
    .replace(/e/g, "3")
    .replace(/i/g, "1")
    .replace(/a/g, "4")
    .replace(/o/g, "0")
    .replace(/s/g, "5");
}
functional_programming.magnitude = (arr) => {
    // return arr.hypot()
    return Math.sqrt(
        arr.map(x => x * x)
            .reduce((accumulator, value) => accumulator + value , 0)
    )
}