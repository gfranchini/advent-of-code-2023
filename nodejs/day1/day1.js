const fs = require('fs');

const text = fs.readFileSync('test.txt').toString().split('\n');

let digits = [];
let sum = 0;

function trebuchet(textData) {
    for (let i = 0; i < text.length; i++) {
        const firstDigit = text[i].match(/\d/);
        const lastDigit = text[i].match(/\d(?=[^\d]*$)/);

        digits.push(parseInt(firstDigit + lastDigit));
    }

    digits.forEach( num => {
        sum += num;
    })

    return sum;
}

module.exports = trebuchet;