import { Sequelize } from 'sequelize';

// Configuración de Sequelize para conectar con PostgreSQL
const sequelize = new Sequelize('mydb', 'postgres', 'password', {
  host: 'localhost',  // Usa 'db' si estás conectando desde otro contenedor Docker, 'localhost' si estás ejecutando desde tu máquina
  port: 5432,
  dialect: 'postgres',
  logging: false, // Para deshabilitar logs de las consultas SQL
});

sequelize.sync({ force: true }) // { force: true } para recrear las tablas (elimina y crea nuevamente)
  .then(() => {
    console.log('Tablas sincronizadas correctamente.');
  })
  .catch((err) => {
    console.error('Error al sincronizar las tablas:', err);
  });

export default sequelize;