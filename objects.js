const objects = {}
objects.spaceWeights = (planetA, weight, planetB) => {
    let table = {
        'Mercury': 3.7,
        'Venus': 8.87,
        'Earth': 9.81,
        'Mars': 3.711,
        'Jupiter': 24.79,
        'Saturn': 10.44,
        'Uranus': 8.69,
        'Neptune': 11.15
    }
    return +((weight / table[planetA]) * table[planetB]).toFixed(2)
}
objects.keysAndValues = (obj) => {
    let data = {
        keys: [],
        values: []
    }
    Object.entries(obj).forEach(([key, value]) => {
        data.keys.push(key)
        data.values.push(value)
    })
    return [data.keys, data.values]
}