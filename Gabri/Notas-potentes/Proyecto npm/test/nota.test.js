// Cambia la importación de 'ava' y 'sinon'
import test from 'ava';
import sinon from 'sinon';
// a
const test = require('ava');
const sinon = require('sinon');

// Cambia la importación de las funciones del servicio de notas
import { crearNota, editarNota, eliminarNota } from '../src/services/notas';
// a
const { crearNota, editarNota, eliminarNota } = require('../src/services/notas');
const { crearNota, editarNota, eliminarNota } = require('../src/services/notas');

// Configuramos espias (spies) para las funciones del servicio antes de cada prueba.
test.beforeEach(t => {
  // Configuramos un espión para la función crearNota.
  t.context.crearNota = sinon.spy(crearNota);
});

test.beforeEach(t => {
  // Configuramos un espión para la función editarNota.
  t.context.editarNota = sinon.spy(editarNota);
});

test.beforeEach(t => {
  // Configuramos un espión para la función eliminarNota.
  t.context.eliminarNota = sinon.spy(eliminarNota);
});

// Prueba para verificar si la función crearNota se llama correctamente.
test('crearNota: debe crearnos una nota', t => {
  const name = 'prueba';
  const data = 'esto es una prueba';
  t.context.crearNota(name, data);
  // Verificamos si la función crearNota fue llamada con los argumentos correctos.
  t.true(t.context.crearNota.calledWith(name, data));
});

// Prueba para verificar si la función editarNota se llama correctamente.
test('editarNota: debe editarnos la nota', t => {
  const name = 'prueba';
  const data = 'esto es una prueba-editando';
  t.context.editarNota(name, data);
  // Verificamos si la función editarNota fue llamada con los argumentos correctos.
  t.true(t.context.editarNota.calledWith(name, data));
});

// Prueba para verificar si la función eliminarNota se llama correctamente.
test('eliminarNota: debe eliminarnos la nota', t => {
  const name = 'prueba';
  t.context.eliminarNota(name);
  // Verificamos si la función eliminarNota fue llamada con los argumentos correctos.
  t.true(t.context.eliminarNota.calledWith(name));
});
