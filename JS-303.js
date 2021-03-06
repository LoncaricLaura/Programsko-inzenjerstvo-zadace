const ackermann = (m, n) => {
    if (m==0) {
        return n+1;
    }
    if (n === 0 && m > 0) {
        return ackermann((m-1), 1);
    }
    if (m > 0 && n > 0) {
        return ackermann((m-1), ackermann(m,(n-1)));
    }
}
console.log(ackermann(0, 5)) // → 6
//console.log(ackermann(5, 0)) // → 65533
console.log(ackermann(3, 6)) // → 509
console.log(ackermann(3, 3)) // → 61