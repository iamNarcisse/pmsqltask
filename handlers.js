 
 
 const {db} = require('./config')
 
 /* Search for user*/
  const getUsersById = (request, response) => {
    const id = parseInt(request.params.id);
    db.query('SELECT name FROM user_details WHERE id = $1', [id], (error, results) => {
      response.status(200).json(results.rows);
    });
  };

/* Search for user loan*/
const getUserloanById = (request, response) => {
    const id = parseInt(request.params.id);
    db.query('SELECT user_loan FROM user_details WHERE id = $1', [id], (error, results) => {
      response.status(200).json(results.rows);
    });
  };

  /* Search for payment*/
const getUserpaymentById = (request, response) => {
    const id = parseInt(request.params.id);
    db.query('SELECT loan_payment FROM user_details WHERE id = $1', [id], (error, results) => {
      response.status(200).json(results.rows);
    });
  };

/* Create User*/
  const addUser = async (request, response) => {
    const { name} = request.body;
    db.query('INSERT INTO user_details (name) VALUES ($1)', [name], (error, results) => {
      response.status(201).send(`User name added successfully.`);
    });
  };
/* Create User loans */

const addUserloan = async (request, response) => {
    const { user_loan } = request.body;
    db.query('INSERT INTO user_details (user_loan) VALUES ($1)', [user_loan], (error, results) => {
      response.status(201).send(`User loan added successfully.`);
    });
  };


  /* Make payments for loans */
  const makeUserpayment = (request, response) => {
    const id = parseInt(request.params.id);
    const { loan_payment} = request.body;
    db.query(
      'UPDATE user_details SET loan_payment = loan_payment + $2 AND loan_balance = user_loan - loan_payment WHERE id = $3', [loan_payment, id], (error, results) => {
        response.status(200).send(`Payment  for id ${id} has been completed.`);
      }
    );
  };
  


  module.exports = {
    getUsersById ,
    getUserloanById,
    getUserpaymentById ,
    addUser,
    addUserloan,
    makeUserpayment,
  };
 
  
