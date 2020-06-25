const loops = {}
loops.boxSeq = (num) => {
    return num % 2 == 0 ? num : num + 2
}
loops.makeTitle = (str) => { 
    let res = []
    str.split(' ').forEach(value => {
        res.push(value[0].toUpperCase() + value.slice(1, value.length))
    })
    return res.join(" ")
}