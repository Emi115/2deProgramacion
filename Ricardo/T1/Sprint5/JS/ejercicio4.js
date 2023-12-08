"use strict";
var listaTareas = [];
function agregarTarea(titulo) {
    var nuevaTarea = { id: listaTareas.length + 1, titulo: titulo, completada: false };
    listaTareas.push(nuevaTarea);
}
function eliminarTarea(id) {
    var index = listaTareas.findIndex(function (tarea) { return tarea.id === id; });
    if (index !== -1) {
        listaTareas.splice(index, 1);
    }
}
function marcarComoImportante(id) {
    var tarea = listaTareas.find(function (t) { return t.id === id; });
    if (tarea) {
        tarea.completada = true;
    }
}
function mostrarTareas() {
    console.log("Lista de Tareas:");
    listaTareas.forEach(function (tarea) {
        console.log("".concat(tarea.id, ". ").concat(tarea.titulo, " - ").concat(tarea.completada ? "Importante" : "Normal"));
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
