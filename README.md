npm i express,

npm i nodemon,

npm i pg /* This is postgresql */

entire code is only in app.js

Task it should be able to do




Create an application, in java spring boot, that connects to a postgresql database and exposes
RESTful APIs that perform the following:
1. Create user
2. Search for user�
3. Create user loan
4. Search for loan
5. Make payments to loan, adjust loan balance
6. Search for payment


SQL code for the table

Create table user_details(
    id SERIAL PRIMARY KEY,
    name varchar(255),
    loan_payment decimal,
    user_loan decimal,
    loan_balance decimal
);
