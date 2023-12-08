// listaTareas.ts
interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
}

const listaTareas: Tarea[] = [];

function agregarTarea(titulo: string): void {
    const nuevaTarea: Tarea = { id: listaTareas.length + 1, titulo, completada: false };
    listaTareas.push(nuevaTarea);
}

function eliminarTarea(id: number): void {
    const index = listaTareas.findIndex(tarea => tarea.id === id);
    if (index !== -1) {
        listaTareas.splice(index, 1);
    }
}

function marcarComoImportante(id: number): void {
    const tarea = listaTareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = true;
    }
}

function mostrarTareas(): void {
    console.log("Lista de Tareas:");
    listaTareas.forEach(tarea => {
        console.log(`${tarea.id}. ${tarea.titulo} - ${tarea.completada ? "Importante" : "Normal"}`);
    });
}

// Prueba
agregarTarea("Hacer ejercicio");
mostrarTareas();

eliminarTarea(1);
mostrarTareas();

agregarTarea("Estudiar TypeScript");
mostrarTareas();

marcarComoImportante(2);
mostrarTareas();
