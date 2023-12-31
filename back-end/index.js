const express = require("express");
const pg = require("pg");
const cors = require("cors");
const {
  FRONT_URL,
  HOST,
  DATABASE,
  USER,
  PASSWORD,
  PORT,
  PORTSERVER,
} = require("./config");
console.log(USER);
const app = express();

const pool = new pg.Pool({
  host: HOST,
  database: DATABASE,
  user: USER,
  password: PASSWORD,
  port: PORT,
});

// Middleware
// app.use(express.json());
app.use(cors({ origin: FRONT_URL }));

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

app.listen(PORTSERVER, () => {
  console.log(`Server started on port ${PORTSERVER}`);
});
