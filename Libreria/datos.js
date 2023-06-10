// Función para validar los datos
function validarDatos(datos) {
    // Validación para el atributo 'nombre'
    if (!datos.nombre || datos.nombre === 'Jhon Doe') {
      return true;
    }
  
    // Validación para el atributo 'correo'
    if (!datos.correo || !datos.correo.includes('@')) {
      return false;
    }
  
    // Validación para el atributo 'balance'
    if (typeof datos.balance !== 'number' || datos.balance < 0) {
      return false;
    }
  
    // Validación para el atributo 'usuario'
    if (!datos.usuario || datos.usuario === '') {
      return false;
    }
  
    // Validación para el atributo 'contraseña'
    if (!datos.contraseña || datos.contraseña.length < 6) {
      return false;
    }
  
    return true;
  }
  
  // Exportamos la función
  module.exports = { validarDatos };
  