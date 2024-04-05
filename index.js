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

inquirer
  .prompt([
    {
      type: "list",
      message:
        "Welcome to your OnDemand Employee Tracking Database. How may we best assit you today?",
      name: "welcomeMessage",
      choices: [
        "View Current",
        "Add New",
        "Update Existing",
        "Delete a Record",
        "Exit",
      ],
    },
  ])
  .then((response) => {
    switch (response.welcomeMessage) {
      case "View Current":
        inquirer
          .prompt([
            {
              type: "list",
              message: "View Current Records for...",
              name: "viewWhat",
              choices: ["Departments", "Roles", "Employees"],
            },
          ])
          .then();
        break;
      case "Add New":
        inquirer
          .prompt([
            {
              type: "list",
              message: "Add New Record for...",
              name: "addWhat",
              choices: ["Departments", "Roles", "Employees"],
            },
          ])
          .then();
        break;
      case "Update Existing":
        inquirer
          .prompt([
            {
              type: "list",
              message: "Update existing data from...",
              name: "updateWhat",
              choices: ["Departments", "Roles", "Employees"],
            },
          ])
          .then();
        break;
      case "Delete a Record":
        inquirer
          .prompt([
            {
              type: "list",
              message: "Delete a record from...",
              name: "deleteWhat",
              choices: ["Departments", "Roles", "Employees"],
            },
          ])
          .then();
        break;
      case "Exit":
        return;
    }
  });
