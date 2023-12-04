// Importa la biblioteca sinon para utilizar stubs en las pruebas.
const sinon = require('sinon');
// Importa la función showUser desde el controlador de usuarios.
const { showUser } = require('../src/controllers/user');

// Función para simular una solicitud con un ID dado.
const mockReq = (id) => ({
    params: {
        id,
    }
});

// Función para simular un objeto de respuesta.
const mockRes = () => ({
    status: function(s) { this.statusCode=s; return this; },
    statusCode: 200,
    send: function(b) { this.body=b; return this;},
});

// Descripción de la suite de pruebas para getUserById con estado 200 OK.
describe('getUserById 200 Ok', () => {
    it('should getUserById', (done) => {
        // ID de usuario simulado.
        const userId = '1';
        // Crea un stub (espía) para la función showUser.
        const res = showUser(mockReq(userId), mockRes());
        // Imprime la respuesta para inspeccionarla si es necesario.
        console.log(JSON.stringify(res, null, 2));
        // Comprueba que el estado de la respuesta es 200 OK.
        expect(res.statusCode).toBe(200);
        // Comprueba que el ID del cuerpo de la respuesta es igual al ID simulado.
        expect(res.body.id).toBe(userId);
        // Indica que la prueba ha finalizado.
        done();
    });
});

// Descripción de la suite de pruebas para getUserById con Error 404.
describe('getUserById Error 404', () => {
    it('should getUserById', (done) => {
        // ID de usuario simulado.
        const userId = 123;
        // Crea un stub (espía) para la función showUser.
        const res = showUser(mockReq(userId), mockRes());
        // Comprueba que el estado de la respuesta es 404.
        expect(res.statusCode).toBe(404);
        // Comprueba que el mensaje del cuerpo de la respuesta es 'User not found'.
        expect(res.body.message).toBe('User not found');
        // Indica que la prueba ha finalizado.
        done();
    });
});
