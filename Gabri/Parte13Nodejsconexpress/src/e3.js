import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('/src/index.html');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
