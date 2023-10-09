const fs = require('fs-extra');

async function listarCarpetasUnidadC() {
  try {
    const unidades = await fs.readdir('C:\\'); // Lee las unidades en la raíz.
    for (const unidad of unidades) {
      const rutaUnidad = `C:\\${unidad}`;
      const carpetas = await fs.readdir(rutaUnidad);
      console.log(`Unidad ${unidad}:`);
      for (const carpeta of carpetas) {
        const rutaCarpeta = path.join(rutaUnidad, carpeta);
        const stats = await fs.stat(rutaCarpeta);
        if (stats.isDirectory()) {
          console.log(`  ${carpeta}`);
        }
      }
      console.log('---');
    }
  } catch (error) {
    console.error('Error al listar carpetas:', error);
  }
}

listarCarpetasUnidadC();
