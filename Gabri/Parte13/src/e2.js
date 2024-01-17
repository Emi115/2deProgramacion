const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello, this is a basic web page!</h1>');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
