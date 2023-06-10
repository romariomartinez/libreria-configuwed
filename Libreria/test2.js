const { validarDatos } = require('./datos.js');

function runTests() {
  // Prueba para el atributo 'nombre'
  let result = validarDatos({ nombre: 'John Doe' });
  console.log(`Prueba 'Validar nombre': ${result ? 'Aprobada' : 'Fallida'}`);

  result = validarDatos({ nombre: '' });
  console.log(`Prueba 'Validar nombre': ${result ? 'Fallida' : 'Aprobada'}`);

  // Prueba para el atributo 'correo'
  result = validarDatos({ correo: 'john@example.com' });
  console.log(`Prueba 'Validar correo': ${result ? 'Aprobada' : 'Fallida'}`);

  result = validarDatos({ correo: 'john' });
  console.log(`Prueba 'Validar correo': ${result ? 'Fallida' : 'Aprobada'}`);

  // Prueba para el atributo 'balance'
  result = validarDatos({ balance: 100 });
  console.log(`Prueba 'Validar balance': ${result ? 'Aprobada' : 'Fallida'}`);

  result = validarDatos({ balance: -50 });
  console.log(`Prueba 'Validar balance': ${result ? 'Fallida' : 'Aprobada'}`);

  // Prueba para el atributo 'usuario'
  result = validarDatos({ usuario: 'johndoe123' });
  console.log(`Prueba 'Validar usuario': ${result ? 'Aprobada' : 'Fallida'}`);

  result = validarDatos({ usuario: '' });
  console.log(`Prueba 'Validar usuario': ${result ? 'Fallida' : 'Aprobada'}`);

  // Prueba para el atributo 'contraseña'
  result = validarDatos({ contraseña: 'password123' });
  console.log(`Prueba 'Validar contraseña': ${result ? 'Aprobada' : 'Fallida'}`);

  result = validarDatos({ contraseña: 'pass' });
  console.log(`Prueba 'Validar contraseña': ${result ? 'Fallida' : 'Aprobada'}`);
}

// Ejecutar las pruebas
runTests();
