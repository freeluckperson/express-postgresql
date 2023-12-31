const express = require("express");
const pg = require("pg");
const cors = require("cors");
const {
  DB_FRONT_URL,
  DB_HOST,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
  DB_PORTSERVER,
  DB_PORT,
} = require("./config");

const app = express();

const pool = new pg.Pool({
  host: DB_HOST,
  database: DB_DATABASE,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
});

// Middleware
// app.use(express.json());
app.use(cors({ origin: DB_FRONT_URL }));

// Routes
app.get("/ping", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({ pong: result.rows[0].now });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(DB_PORTSERVER, () => {
  console.log(`Server started on port ${DB_PORTSERVER}`);
});
