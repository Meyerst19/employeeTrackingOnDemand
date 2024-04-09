//Class Prompts to create an object with methods for routes the user can follow when navigating through command line inquirer app

const inquirer = require("inquirer");
const companyQuery = require("../db/query.js");

class Prompts {
  //welcome() introduce the application and auto forward to the main()
  welcome() {
    inquirer
      .prompt([
        {
          type: "list",
          message:
            "Welcome to your OnDemand Employee Tracking Database. Where you can view and manage your companies department, roles and employees structures. Where would you like to begin?",
          name: "welcomeMessage",
          choices: ["Departments", "Roles", "Employees", "Queries", "Exit"],
        },
      ])
      .then(function (response) {
        switch (response.welcomeMessage) {
          case "Departments":
            Prompts.prototype.department();
            break;
          case "Roles":
            Prompts.prototype.role();
            break;
          case "Employees":
            Prompts.prototype.employee();
            break;
          case "Queries":
            Prompts.prototype.queries();
            break;
          case "Exit":
            process.exit(0);
          default:
        }
      });
  }

  //main() go into department, role or employee data or query or exit - main menu
  main() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What area would you like to go next?",
          name: "mainMenu",
          choices: ["Departments", "Roles", "Employees", "Query", "Exit"],
        },
      ])
      .then(function (response) {
        switch (response.mainMenu) {
          case "Departments":
            Prompts.prototype.department();
            break;
          case "Roles":
            Prompts.prototype.role();
            break;
          case "Employees":
            Prompts.prototype.employee();
            break;
          case "Queries":
            Prompts.prototype.queries();
            break;
          case "Exit":
            process.exit(0);
          default:
        }
      });
  }

  //department() view => departmentQuery add, update, delete or exit

  department() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "DEPARTMENTS",
          name: "departments",
          choices: [
            "View all Departments",
            "View Employees by Department",
            "View Total Utilized Budget by Departments",
            "Add a Department",
            "Update a Department",
            "Delete a Department",
            "Return to Main Menu",
            "Exit",
          ],
        },
      ])
      .then(function (response) {
        switch (response.departments) {
          case "View all Departments":
            companyQuery.viewDepartments();
            break;
          case "View Employees by Department":
            Prompts.prototype.departmentEmployees();
            break;
          case "View Total Utilized Budget by Departments":
            companyQuery.utilizedBudget();
            break;
          case "Add a Department":
            Prompts.prototype.addDepartment();
            // companyQuery.addDepartment();
            break;
          case "Update a Department":
            Prompts.prototype.updateDepartment();
            break;
          case "Delete a Department":
            Prompts.prototype.deleteDepartment();
            break;
          case "Return to Main Menu":
            Prompts.prototype.main();
            break;
          case "Exit":
            process.exit(0);
          default:
        }
      });
  }

  //role() same as department but role
  role() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "ROLES",
          name: "roles",
          choices: [
            "View all Roles",
            "Add a Role",
            "Update a Role",
            "Delete a Role",
            "Return to Main Menu",
            "Exit",
          ],
        },
      ])
      .then(function (response) {
        switch (response.roles) {
          case "View all Roles":
            companyQuery.viewRoles();
            break;
          case "Add a Role":
            Prompts.prototype.addRole();
            break;
          case "Update a Role":
            Prompts.prototype.updateRole();
            break;
          case "Delete a Role":
            Prompts.prototype.deleteRole();
            break;
          case "Return to Main Menu":
            Prompts.prototype.main();
            break;
          case "Exit":
            process.exit(0);
          default:
        }
      });
  }

  //employee() same as above
  employee() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "EMPLOYEES",
          name: "employees",
          choices: [
            "View all Employees",
            "View Employees by Manager",
            "View Employees by Department",
            "Add an Employee",
            "Update an Employee",
            "Update a Manager",
            "Delete an Employee Record",
            "Return to Main Menu",
            "Exit",
          ],
        },
      ])
      .then(function (response) {
        switch (response.employees) {
          case "View all Employees":
            companyQuery.viewEmployees();
            break;
          case "View Employees by Manager":
            Prompts.prototype.managerEmployees();
            break;
          case "View Employees by Department":
            Prompts.prototype.departmentEmployees();
            break;
          case "Add an Employee":
            Prompts.prototype.addEmployee();
            break;
          case "Update an Employee":
            Prompts.prototype.updateEmployee();
            break;
          case "Update a Manager":
            Prompts.prototype.updateManager();
            break;
          case "Delete an Employee Record":
            Prompts.prototype.deleteEmployee();
            break;
          case "Return to Main Menu":
            Prompts.prototype.main();
            break;
          case "Exit":
            process.exit(0);
          default:
        }
      });
  }

  queries() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "QUERIES",
          name: "queries",
          choices: [
            "View all Departments",
            "View all Roles",
            "View Total Utilized Budget by Departments",
            "View Employees by Department",
            "View Employees by Manager",
            "Return to Main Menu",
            "Exit",
          ],
        },
      ])
      .then(function (response) {
        switch (response.queries) {
          case "View all Departments":
            companyQuery.viewDepartments();
            break;
          case "View all Roles":
            companyQuery.viewRoles();
            break;
          case "View Total Utilized Budget by Departments":
            companyQuery.utilizedBudget();
            break;
          case "View Employees by Department":
            Prompts.prototype.departmentEmployees();
            break;
          case "View Employees by Manager":
            Prompts.prototype.managerEmployees();
            break;
          case "Return to Main Menu":
            Prompts.prototype.main();
            break;
          case "Exit":
            process.exit(0);
          default:
        }
      });
  }

  addDepartment() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the new departments name?",
          name: "departmentName",
        },
      ])
      .then((response) => companyQuery.addDepartment(response.departmentName));
  }

  addRole() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the new roles title?",
          name: "roleTitle",
        },
        {
          type: "number",
          message: "What is the new roles salary?",
          name: "roleSalary",
        },
        {
          type: "number",
          message: "What is the Department Id of the new role?",
          name: "roleDepartmentId",
        },
      ])
      .then((response) => {
        companyQuery.addRole(
          response.roleTitle,
          response.roleSalary,
          response.roleDepartmentId
        );
      });
  }

  addEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the new employee's first name?",
          name: "employeeFirstName",
        },
        {
          type: "input",
          message: "What is the new employee's last name?",
          name: "employeeLastName",
        },
        {
          type: "number",
          message: "What is the new employee's role id?",
          name: "employeeRoleId",
        },
        {
          type: "number",
          message: "What is the id of the new employee's manager?",
          name: "employeeManagerId",
        },
      ])
      .then((response) => {
        companyQuery.addEmployee(
          response.employeeFirstName,
          response.employeeLastName,
          response.employeeRoleId,
          response.employeeManagerId
        );
      });
  }

  updateEmployee() {
    inquirer
      .prompt([
        {
          type: "number",
          message:
            "Please provide the employee number of the employee you wish to update.",
          name: "employeeId",
        },
        {
          type: "list",
          message: "What field would you like to update?",
          name: "updateField",
          choices: ["First Name", "Last Name", "Role"],
        },
        {
          type: "input",
          message: "What is the new value for the field?",
          name: "updatedValue",
        },
      ])
      .then((response) => {
        companyQuery.updateEmployee(
          response.updateField,
          response.updateValue,
          response.employeeId
        );
      });
  }

  updateRole() {
    inquirer
      .prompt([
        {
          type: "number",
          message: "What is the ID of the role you would like to update?",
          name: "roleId",
        },
        {
          type: "list",
          message: "Which field would you like to update?",
          name: "updateField",
          choices: ["title", "salary", "department_id"],
        },
        {
          type: "input",
          message: "What is the new value for the field?",
          name: "updateValue",
        },
      ])
      .then((response) => {
        companyQuery.updateRole(
          response.updateField,
          response.updateValue,
          response.roleId
        );
      });
  }

  updateManager() {
    inquirer
      .prompt([
        {
          type: "number",
          message:
            "Which employee would you like to update the manager for? Please provide their employee number:",
          name: "employeeId",
        },
        {
          type: "number",
          message: "What is the new manager's employee numnber?",
          name: "managerId",
        },
      ])
      .then((response) => {
        companyQuery.updateManager(response.managerId, response.employeeId);
      });
  }

  updateDepartment() {
    inquirer
      .prompt([
        {
          type: "number",
          message: "What is the ID of the department you would like to update?",
          name: "departmentId",
        },
        {
          type: "input",
          message: "What is the updated department name?",
          name: "updateValue",
        },
      ])
      .then((response) => {
        companyQuery.updateDepartment(
          response.updateValue,
          response.departmentId
        );
      });
  }

  managerEmployees() {
    inquirer
      .prompt([
        {
          type: "number",
          message: "What is the employee ID of the manager?",
          name: "managerId",
        },
      ])
      .then((response) => {
        companyQuery.managerEmployees(response.managerId);
      });
  }

  departmentEmployees() {
    inquirer
      .prompt([
        {
          type: "number",
          message: "What is the ID of the department?",
          name: "employeeDepartmentId",
        },
      ])
      .then(function (response) {
        console.log(response.employeeDepartmentId);
        companyQuery.departmentEmployees(response.employeeDepartmentId);
      });
  }

  deleteDepartment() {
    inquirer
      .prompt([
        {
          type: "number",
          message: "What is the ID of the department to be deleted?",
          name: "departmentId",
        },
      ])
      .then((response) => {
        companyQuery.deleteDepartment(response.departmentId);
      });
  }

  deleteRole() {
    inquirer
      .prompt([
        {
          type: "number",
          message: "What is the ID of the role to be deleted?",
          name: "roleId",
        },
      ])
      .then((response) => {
        companyQuery.deleteRole(response.roleId);
      });
  }

  deleteEmployee() {
    inquirer
      .prompt([
        {
          type: "number",
          message: "What is the ID of the employee to be deleted?",
          name: "employeeId",
        },
      ])
      .then((response) => {
        companyQuery.deleteEmployee(response.employeeId);
      });
  }

  next() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Would you like to return to the main menu or exit?",
          name: "next",
          choices: ["Return to Main Menu", "Exit"],
        },
      ])
      .then((response) => {
        switch (response.next) {
          case "Return to Main Menu":
            Prompts.prototype.main();
            break;
          case "Exit":
            process.exit(0);
          default:
        }
      });
  }
}

module.exports = new Prompts();
