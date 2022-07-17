

const express = require('express');
const handlers = require('./handlers')

const app = express();
const port = 5000;

app.use(express.json());



/*

Enities
- User
- Loan
- Payment

# User


Activies
- Store
- Search

Routes

- add user => /user
- getUserById => /user/:userId

# Payment

Activities
- Make payment

Routes

- /payment POST

- /payments/user/:userId GET

*/




// User 
app.get("/user/:id", handlers.getUsersById);
app.post("/user",handlers.addUser)

// Payments
app.post("/payment/:id", handlers.makeUserpayment);
app.get("/payment/user/:userId", handlers.getUserpaymentById)


// Loan

app.listen(port, () => {
  console.log(`Imalipay admin  is running on port ${port}.`);
});



  

