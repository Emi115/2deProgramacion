import express from 'express';

const app = express();
const port = 3000;

app.get('/fizzbuzz', (req, res) => {
  const number = parseInt(req.query.number, 10);
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(number)) {
    let result = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result += 'FizzBuzz ';
      } else if (i % 3 === 0) {
        result += 'Fizz ';
      } else if (i % 5 === 0) {
        result += 'Buzz ';
      } else {
        result += `${i} `;
      }
    }
    res.send(result.trim());
  } else {
    res.status(400).send('Invalid number');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
