import express from 'express';

const app = express();
const port = 3000;

app.get('/page', (req, res) => {
  res.send('This is a page.');
});

app.get('/error', (req, res) => {
  res.status(404).send('404 - Page not found.');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
