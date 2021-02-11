let array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

let soma = array.reduce((acumulador, numero) => {
    return acumulador + numero
})

console.log(soma)

function soma2(...array) {
    let acm = 0
    for (const i of array) {
        acm += i
    }
    return acm
}

console.log(soma2(...array))