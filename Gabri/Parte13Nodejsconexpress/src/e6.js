import express from 'express';

const app = express();
const port = 3000;

app.get('/illo', (req, res) => {
  const name = req.query.name || 'World';
  res.send(`Hello ${name}!`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
