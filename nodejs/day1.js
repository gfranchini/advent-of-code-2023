const fs = require('fs');

const text = fs.readFileSync('input.txt').toString().split('\n');

let digits = [];
let sum = 0;

for (let i = 0; i < text.length; i++) {
    const firstDigit = text[i].match(/\d/);
    const lastDigit = text[i].match(/\d(?=[^\d]*$)/);

    digits.push(parseInt(firstDigit + lastDigit));
}

digits.forEach( num => {
    sum += num;
})

console.log(sum);