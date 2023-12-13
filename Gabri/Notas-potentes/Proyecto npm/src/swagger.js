const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bloc de Notas API',
      version: '1.0.0',
      description: 'API para gestionar notas',
    },
  },
  apis: ['./src/controllers/*.js'], // Rutas a los controladores de la API
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
