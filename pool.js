const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sports_db',
  password: 'your_password',
  port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err ? err.stack : 'PostgreSQL Connected: ' + res.rows[0].now);
});