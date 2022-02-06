import pg from "pg";

const pk = process.env
export const pool = new pg.Pool({
  user: pk.PGUSER,
  host: pk.PGHOST,
  database: pk.PGDATABASE,
  password: pk.PGPASSWORD,
  port: pk.PGPORT,
  ssl: {
    rejectUnauthorized: false,
  },
});
