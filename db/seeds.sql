INSERT INTO departments (name)
VALUES ('Finance'),
       ('Sales'),
       ('IT');

INSERT INTO roles (title, salary, department_id)
VALUES ('CFO', 200000, 1),
       ('DIRECTOR FINANCIAL OPERATIONS', 130000, 1),
       ('PURCHASING MANAGER', 90000, 1),
       ('AP MANAGER', 80000, 1),
       ('SW REG SALES MANAGER', 150000, 2),
       ('FULL STACK DEVELOPER', 900000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('CHARLES', 'CARPENTER', 1, 1),
       ('STACI', 'CRUM', 2, 1),
       ('CINDY', 'ROTH', 3, 2),
       ('CATHY', 'GENTRY', 4, 2),
       ('GREG', 'FIELDS', 5, 4),
       ('TYLER', 'MEYERS', 6, 6);