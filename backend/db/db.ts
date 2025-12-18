import { Pool } from 'pg';

const db = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'dbgdc',
  user: 'postgres',
  password: '12345'
});

export default db;