const DB_FRONT_URL = process.env.DB_FRONT_URL || "http://localhost:5173";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_DATABASE = process.env.DB_DATABASE || "test2db";
const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "postgres";
const DB_PORTSERVER = process.env.DB_PORTSERVER | 3000;
const DB_PORT = process.env.DB_PORT || 5432;

module.exports = {
  DB_FRONT_URL,
  DB_HOST,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
  DB_PORTSERVER,
  DB_PORT,
};
