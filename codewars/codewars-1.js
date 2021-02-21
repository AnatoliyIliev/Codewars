function descendingOrder(n) {    
    return Number(String(n).split('').sort().reverse().join(''))
    
}





console.log(descendingOrder(2110));
console.log(descendingOrder(100000));
console.log(descendingOrder(123456789));