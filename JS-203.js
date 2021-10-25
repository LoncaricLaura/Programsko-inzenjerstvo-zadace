
velicina = 8;
let x = '';
for (let i = 0; i < velicina; i++) {
    for (let j = 1; j <= velicina; j++) {
        if ((i+j)%2 == 0) {
            x += '#';
        }
        else {
            x += ' ';
        }
    }
    x += '\n';
}
console.log(x);