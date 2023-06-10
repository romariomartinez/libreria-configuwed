// Importar las funciones y clases a probar
const { validarCampo, validarEmail, validarBalance } = require('./validaciones');

// Pruebas unitarias para validarCampo
describe('validarCampo', () => {
  it('debería retornar true si el campo no está vacío', () => {
    expect(validarCampo('John Doe')).toBe(true);
  });

  it('debería retornar false si el campo está vacío', () => {
    expect(validarCampo('')).toBe(false);
  });
});

// Pruebas unitarias para validarEmail
describe('validarEmail', () => {
  it('debería retornar true si el email es válido', () => {
    expect(validarEmail('test@example.com')).toBe(true);
  });

  it('debería retornar false si el email no es válido', () => {
    expect(validarEmail('invalid_email')).toBe(false);
  });
});

// Pruebas unitarias para validarBalance
describe('validarBalance', () => {
  it('debería retornar true si el balance es un número mayor o igual a cero', () => {
    expect(validarBalance(100)).toBe(true);
    expect(validarBalance(0)).toBe(true);
  });

  it('debería retornar false si el balance no es un número o es menor a cero', () => {
    expect(validarBalance('100')).toBe(false);
    expect(validarBalance(-50)).toBe(false);
  });
});
