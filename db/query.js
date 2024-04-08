///create a class (Query) that will contain the methods that view/create/update/delete data

const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: "localhost",
  database: process.env.DB_NAME,
});

pool.connect();

class CompanyQuery {
  //View all Departments (names, deparment_ids): viewDepartments()
  viewDepartments() {
    pool.query("SELECT * FROM departments", function (err, { rows }) {
      console.table(rows);
    });
  }

  //View all Roles (Job Title, role id, Department(name), salary): viewRoles()
  viewRoles() {
    pool.query("SELECT * FROM roles", function (err, { rows }) {
      console.table(rows);
    });
  }

  //View all Employees (employee id, fist name, last name, job title, department, salary, manager name): viewEmployees()
  viewEmployees() {
    pool.query("SELECT * FROM employees", function (err, { rows }) {
      console.table(rows);
    });
  }

  //Add Department (provie name): addDepartment(name): addDepartment
  addDepartment(departmentName) {
    pool.query(
      `INSERT INTO departments (name)
    VALUE ($1)`,
      [departmentName],
      function (err, { rows }) {
        console.table(rows);
      }
    );
  }

  //Add Role (provide name, salary and department): addRole()
  addRole(roleTitle, roleSalary, roleDepartmentId) {
    pool.query(
      `INSERT INTO roles (title, salary, department_id)
    VALUE ($1, $2, $3)`,
      [roleTitle, roleSalary, roleDepartmentId],
      function (err, { rows }) {
        console.table(rows);
      }
    );
  }

  //Add Employee (provide first name, last name, role, manager): addEmployee()
  addEmployee(
    employeeFirstName,
    employeeLastName,
    employeeRoleId,
    employeeManagerId
  ) {
    pool.query(
      `INSERT INTO roles (first_name, last_name, role_id, manager_id)
    VALUE ($1, $2, $3, $4)`,
      [employeeFirstName, employeeLastName, employeeRoleId, employeeManagerId],
      function (err, { rows }) {
        console.table(rows);
      }
    );
  }
  //Update Employee (select employee provide field to update and updatevalue): updateEmployee()
  updateEmployee(updateField, updateValue, employeeId) {
    pool.query(
      `UPDATE employees
    SET $1 = $2
    WHERE id = $3`,
      [updateField, updateValue, employeeId],
      function (err, { rows }) {
        console.table(rows);
      }
    );
  }
  //Update Role: updateRole()
  updateRole(updateField, updateValue, roleId) {
    pool.query(
      `UPDATE roles
    SET $1 = $2
    WHERE id = $3`,
      [updateField, updateValue, roleId],
      function (err, { rows }) {
        console.table(rows);
      }
    );
  }
  //Update Manager: updateManager()
  updateManager(managerId, employeeId) {
    pool.query(
      `UPDATE employees
    SET manager_id = $1
    WHERE id = $2`,
      [managerId, employeeId],
      function (err, { rows }) {
        console.table(rows);
      }
    );
  }
  //Update Department: updateDepartment()
  updateDepartment(updateValue, departmentId) {
    pool.query(
      `UPDATE departments
    SET name = $1
    WHERE id = $2`,
      [updateValue, departmentId],
      function (err, { rows }) {
        console.table(rows);
      }
    );
  }
  //Manager's Employees: managerEmployees()
  managerEmployees(managerId) {
    pool.query(
      `SELECT * FROM employees WHERE manager_id = $1`,
      [managerId],
      function (err, { rows }) {
        console.table(rows);
      }
    );
  }
  //Department Employees: departmentEmployees()
  departmentEmployees(employeeDepartmentId) {
    pool.query(
      `SELECT * FROM employees WHERE department_id = $1`,
      [employeeDepartmentId],
      function (err, { rows }) {
        console.table(rows);
      }
    );
  }
  //Delete Department: deleteDepartment()
  deleteDepartment(departmentId) {
    pool.query(
      `DELETE FROM departments WHERE id = $1`,
      [departmentId],
      function (err, { rows }) {
        console.table(rows);
      }
    );
  }
  //Delete Roles: deleteRole()
  deleteRole(roleId) {
    pool.query(
      `DELETE FROM roles WHERE id = $1`,
      [roleId],
      function (err, { rows }) {
        console.table(rows);
      }
    );
  }
  //Delete Employees: deleteEmployee()
  deleteEmployee(employeeId) {
    pool.query(
      `DELETE FROM employees WHERE id = $1`,
      [employeeId],
      function (err, { rows }) {
        console.table(rows);
      }
    );
  }
  //DepartmentUtilizedBudget (sum of employee salaries): utilizedBudget()
  utilizedBudget() {
    pool.query(
      `SELECT departments.name AS department, roles.department_id AS department_number, SUM(roles.salary) AS utilized_budget FROM roles GROUP BY roles.department_id JOIN departments ON roles.department_id = departments.id`,
      function (err, { rows }) {
        console.table(rows);
      }
    );
  }
}

module.exports = new CompanyQuery();
