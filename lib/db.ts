import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.NEXT_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  idleTimeoutMillis: 20000,
  max: 10,
});

export default pool;

