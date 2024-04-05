const inquirer = require("inquirer");
const { Pool } = require("pg");
const query = require("./db/query.js");
require("dotenv").config();

const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: "localhost",
  database: DB_NAME,
});

pool.connect();
