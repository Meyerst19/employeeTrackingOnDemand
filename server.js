const prompts = require("./directions/prompts.js");

prompts.welcome();
// inquirer
//   .prompt([
//     {
//       type: "list",
//       message:
//         "Welcome to your OnDemand Employee Tracking Database. How may we best assit you today?",
//       name: "welcomeMessage",
//       choices: [
//         "View all departments",
//         "View all roles",
//         "View all employees",
//         "Add a department",
//         "Add a role",
//         "Add an employee",
//         "Update employee role",
//         "Update employee manager",
//         "View employees by manager",
//         "View employees by department",
//         "Delete a department",
//         "Delete a role",
//         "Delete an employee",
//         "View Utilized Budget",
//       ],
//     },
//   ])
//   .then();
//       "View Current",
//       "Add New",
//       "Update Existing",
//       "Delete a Record",
//       "Exit",
//     ],
//   },
// ])
// .then((response) => {
//   switch (response.welcomeMessage) {
//     case "View Current":
//       inquirer
//         .prompt([
//           {
//             type: "list",
//             message: "View Current Records for...",
//             name: "viewWhat",
//             choices: ["Departments", "Roles", "Employees"],
//           },
//         ])
//         .then();
//       break;
//     case "Add New":
//       inquirer
//         .prompt([
//           {
//             type: "list",
//             message: "Add New Record for...",
//             name: "addWhat",
//             choices: ["Departments", "Roles", "Employees"],
//           },
//         ])
//         .then();
//       break;
//     case "Update Existing":
//       inquirer
//         .prompt([
//           {
//             type: "list",
//             message: "Update existing data from...",
//             name: "updateWhat",
//             choices: ["Departments", "Roles", "Employees"],
//           },
//         ])
//         .then();
//       break;
//     case "Delete a Record":
//       inquirer
//         .prompt([
//           {
//             type: "list",
//             message: "Delete a record from...",
//             name: "deleteWhat",
//             choices: ["Departments", "Roles", "Employees"],
//           },
//         ])
//         .then();
//       break;
//     case "Exit":
//       return;
//   }
// });
