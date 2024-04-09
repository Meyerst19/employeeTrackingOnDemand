///create a class (Query) that will contain the methods that view/create/update/delete data

const { Pool } = require("pg");
// const prompts = require("../directions/prompts.js");
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
    pool.query("SELECT * FROM departments", (err, { rows }) => {
      if (err) {
        console.log(err);
        return;
      }
      console.table(rows);
    });
  }

  //View all Roles (Job Title, role id, Department(name), salary): viewRoles()
  viewRoles() {
    pool.query("SELECT * FROM roles", (err, { rows }) => {
      if (err) {
        console.log(err);
        return;
      }
      console.table(rows);
    });
  }

  //View all Employees (employee id, fist name, last name, job title, department, salary, manager name): viewEmployees()
  viewEmployees() {
    pool.query("SELECT * FROM employees", (err, { rows }) => {
      if (err) {
        console.log(err);
        return;
      }
      console.table(rows);
    });
  }

  //Add Department (provie name): addDepartment(name): addDepartment
  addDepartment(departmentName) {
    pool.query(
      "INSERT INTO departments (name)  VALUES ($1)",
      [departmentName],
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Success!");
      }
    );
  }

  //Add Role (provide name, salary and department): addRole()
  addRole(roleTitle, roleSalary, roleDepartmentId) {
    pool.query(
      "INSERT INTO roles (title, salary, department_id)  VALUES ($1, $2, $3)",
      [roleTitle, roleSalary, roleDepartmentId],
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Success!");
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
      "INSERT INTO employees (first_name, last_name, role_id, manager_id)  VALUES ($1, $2, $3, $4)",
      [employeeFirstName, employeeLastName, employeeRoleId, employeeManagerId],
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Success!");
      }
    );
  }
  //Update Employee (select employee provide field to update and updatevalue): updateEmployee()
  updateEmployee(updateField, updateValue, employeeId) {
    const sql = `UPDATE employees  SET ${updateField} = $1  WHERE id = $2`;

    pool.query(sql, [updateValue, employeeId], (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Success!");
    });
  }
  //Update Role: updateRole()
  updateRole(updateField, updateValue, roleId) {
    const sql = `UPDATE roles  SET ${updateField} = $1  WHERE id = $2`;

    pool.query(sql, [updateValue, roleId], (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Success!");
    });
  }
  //Update Manager: updateManager()
  updateManager(managerId, employeeId) {
    const sql = `UPDATE employees  SET manager_id = $1  WHERE id = $2`;

    pool.query(sql, [managerId, employeeId], (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Success!");
    });
  }
  //Update Department: updateDepartment()
  updateDepartment(updateValue, departmentId) {
    const sql = `UPDATE departments  SET name = $1  WHERE id = $2`;

    pool.query(sql, [updateValue, departmentId], (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Success!");
    });
  }
  //Manager's Employees: managerEmployees()
  managerEmployees(managerId) {
    pool.query(
      "SELECT * FROM employees  WHERE manager_id = $1",
      [managerId],
      (err, { rows }) => {
        if (err) {
          console.log(err);
          return;
        }
        console.table(rows);
      }
    );
  }
  //Department Employees: departmentEmployees()
  departmentEmployees(employeeDepartmentId) {
    //departments_id comes from the role of the employee
    pool.query(
      "SELECT roles.department_id AS Department_Number, employees.first_name AS First_Name, employees.last_name AS Last_Name, employees.id AS Employee_ID, employees.manager_id AS Manager_Employee_Id FROM roles JOIN employees ON roles.id = employees.role_id  WHERE roles.department_id = $1",
      [employeeDepartmentId],
      (err, { rows }) => {
        if (err) {
          console.log(err);
          return;
        }
        console.table(rows);
      }
    );
  }
  //Delete Department: deleteDepartment()
  deleteDepartment(departmentId) {
    pool.query(
      `DELETE FROM departments WHERE id = $1`,
      [departmentId],
      (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("DELETED");
      }
    );
  }
  //Delete Roles: deleteRole()
  deleteRole(roleId) {
    pool.query(`DELETE FROM roles WHERE id = $1`, [roleId], (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("DELETED");
    });
  }
  //Delete Employees: deleteEmployee()
  deleteEmployee(employeeId) {
    pool.query(
      `DELETE FROM employees WHERE id = $1`,
      [employeeId],
      (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("DELETED");
      }
    );
  }
  //DepartmentUtilizedBudget (sum of employee salaries): utilizedBudget()
  utilizedBudget() {
    pool.query(
      `SELECT SUM(roles.salary) AS utilized_budget, roles.department_id AS department_number FROM roles GROUP BY roles.department_id `,
      (err, { rows }) => {
        if (err) {
          console.log(err);
          return;
        }
        console.table(rows);
      }
    );
  }
}

module.exports = new CompanyQuery();
