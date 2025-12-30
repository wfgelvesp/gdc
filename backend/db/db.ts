import { Pool } from 'pg';

// Configuración de la conexión a la base de datos PostgreSQL local
/*
const db = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'dbgdc',
  user: 'postgres',
  password: '12345'
});
*/

// Configuración de la conexión a la base de datos PostgreSQL en Neon
const db = new Pool({
  host: 'ep-wandering-dust-a41qklky-pooler.us-east-1.aws.neon.tech',
  port: 5432,
  database: 'neondb',
  user: 'neondb_owner',
  password: 'npg_P50xTshGipNq',
  ssl:true
});


export default db;