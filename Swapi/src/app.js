const express = require('express');
const swapiRoutes = require('./routes/swapiRoutes');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/swapi', swapiRoutes);

app.get('/', (req, res) => {
    res.redirect('/swapi/busqueda');
});


module.exports = app;
