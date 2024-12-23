const db = require('./db');

// Datos del usuario
const nuevoUsuario = {
  nombre: 'Juan Pérez',
  email: 'juan.perez@example.com',
  password: '123456',
  planta: 'Planta 1',
  area: 'Producción',
  rol: 'usuario',
};

// Insertar usuario
db.query(
  'INSERT INTO usuario (nombre, email, password, planta, area, rol) VALUES (?, ?, ?, ?, ?, ?)',
  [nuevoUsuario.nombre, nuevoUsuario.email, nuevoUsuario.password, nuevoUsuario.planta, nuevoUsuario.area, nuevoUsuario.rol],
  (err, results) => {
    if (err) {
      console.error('Error al insertar:', err);
      return;
    }
    console.log('Usuario insertado con ID:', results.insertId);
  }
);

// // Consultar usuarios
// db.query('SELECT * FROM usuario', (err, results) => {
//     if (err) {
//       console.error('Error al consultar:', err);
//       return;
//     }
//     console.log('Usuarios encontrados:', results);
//   });

// //Actualizar usuario
// const nuevoEmail = 'Alejandro.actualizado@example.com';
// const usuarioId = 1; 
// db.query(
//   'UPDATE usuario SET email = ? WHERE usuario_id = ?',
//   [nuevoEmail, usuarioId],
//   (err, results) => {
//     if (err) {
//       console.error('Error al actualizar:', err);
//       return;
//     }
//     console.log('Usuario actualizado:', results.message);
//   }
// );

// // Eliminar usuario
// const usuarioAEliminar = 1; // Cambia por el ID del usuario

// db.query('DELETE FROM usuario WHERE usuario_id = ?', [usuarioAEliminar], (err, results) => {
//   if (err) {
//     console.error('Error al eliminar:', err);
//     return;
//   }
//   console.log('Usuario eliminado:', results.message);
// });

