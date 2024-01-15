const express = require('express');
const swapiRoutes = require('./routes/swapiRoutes');

const app = express();

// Use the SWAPI routes
app.use('/api', swapiRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));