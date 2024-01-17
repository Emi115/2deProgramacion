import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// Define el directorio actual en relación con el archivo actual
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname)

// Función para parsear archivos YAML
function parseYaml(file) {
    return yaml.load(readFileSync(resolve(__dirname, `${file}.yml`), 'utf8'));
}

// Exporta el documento de especificación de Swagger/OpenAPI
export const swaggerDoc = {
    openapi: "3.0.0",
    info: {
        title: "My simple API",
        description: "A simple API to learn how to write OpenAPI Specification",
    },
    paths: parseYaml('paths'), // Carga las rutas desde paths.yml
    components: {
        schemas: parseYaml('schemas'), // Carga los esquemas
        securitySchemes: parseYaml('security'), // Carga los esquemas de seguridad
        examples: parseYaml('examples'), // Carga ejemplos
        responses: parseYaml('responses'), // Carga las respuestas
    },
};
