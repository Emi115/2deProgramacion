const express = require('express');
const swapiRoutes = require('./routes/swapiRoutes');

const app = express();

// Utiliza las rutas de SWAPI
app.use('/api', swapiRoutes);

// Inicia el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
