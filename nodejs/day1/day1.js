import fs from 'fs';

function trebuchet(fileInput) {
  let digits = [];
  let sum = 0;

  const text = fs.readFileSync(fileInput).toString().split("\n");

  for (let i = 0; i < text.length; i++) {
    const firstDigit = text[i].match(/\d/);
    const lastDigit = text[i].match(/\d(?=[^\d]*$)/);

    digits.push(parseInt(firstDigit + lastDigit));
  }

  digits.forEach((num) => {
    sum += num;
  });

  return sum;
}

export default trebuchet;
