INSERT INTO departments (name)
VALUES ('Finance'),
       ('Sales'),
       ('IT');

INSERT INTO roles (title, salary, department_id)
VALUES ('CFO', 200000, 1),
       ('FINANCE DIRECTOR', 100000, 1),
       ('PURCHASING MANAGER', 70000, 1),
       ('AP MANAGER', 70000, 1),
       ('CHEIF OF SALES', 200000, 2),
       ('SALES DIRECTOR', 100000, 2),
       ('SALES MANAGER', 70000, 2),
       ('CTO', 200000, 3),
       ('TECHNOLOGY DIRECTOR', 100000, 3),
       ('TECHNOLOGY MANAGER', 70000, 3);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('CFO', 'Last', 1, null),
       ('FINANCE', 'DIRECTOR', 2, 1),
       ('PURCHASING', 'MANAGER', 3, 2),
       ('AP', 'MANAGER', 4, 2),
       ('CHEIF', 'SALES', 5, null),
       ('SALES', 'DIRECTOR', 6, 5),
       ('SALES', 'MANAGER', 7, 6),
       ('CTO', 'Cheif', 8, null),
       ('TECHNOLOGY', 'DIRECTOR', 9, 8),
       ('TECHNOLOGY', 'MANAGER', 10, 9);