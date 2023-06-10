// Importamos la función que vamos a probar
const { validarDatos } = require('./datos.js');

// Importamos el módulo de aserciones
const assert = require('assert');

// Prueba para el atributo 'nombre'
it('Validar nombre', () => {
  assert.equal(validarDatos({ nombre: 'John Doe' }), true);
  assert.equal(validarDatos({ nombre: 'John Doe' }), true);
});

// Prueba para el atributo 'correo'
it('Validar correo', () => {
  assert.equal(validarDatos({ correo: 'john@example.com' }), true);
  assert.equal(validarDatos({ correo: 'john' }), false);
});

// Prueba para el atributo 'balance'
it('Validar balance', () => {
  assert.equal(validarDatos({ balance: 100 }), true);
  assert.equal(validarDatos({ balance: -50 }), false);
});

// Prueba para el atributo 'usuario'
it('Validar usuario', () => {
  assert.equal(validarDatos({ usuario: 'johndoe123' }), true);
  assert.equal(validarDatos({ usuario: '' }), false);
});

// Prueba para el atributo 'contraseña'
it('Validar contraseña', () => {
  assert.equal(validarDatos({ contraseña: 'password123' }), true);
  assert.equal(validarDatos({ contraseña: 'pass' }), false);
});
