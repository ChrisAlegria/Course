const mysql = require('mysql2');

// Configuración de conexión
const connection = mysql.createConnection({
  host: '10.228.57.3',  // Dirección IP del servidor remoto
  port: 3306,            // Puerto de la base de datos 
  user: 'desarrolloTest',          // Usuario para la conexión
  password: '0dq@HJLTb7Nl%peU',          // Contraseña del usuario 
  database: 'administracion-mejoras-kaizen' // Nombre de la base de datos
});


// Probar conexión
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

module.exports = connection;
