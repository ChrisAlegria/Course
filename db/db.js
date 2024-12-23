const mysql = require('mysql2');

// Configuración de conexión
const connection = mysql.createConnection({
  host: '0.0.0.0',  // Dirección IP del servidor remoto
  port: 3306,            // Puerto de la base de datos 
  user: 'root',          // Usuario para la conexión
  password: '',          // Contraseña del usuario 
  database: 'test' // Nombre de la base de datos
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
