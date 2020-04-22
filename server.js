const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

const tables = require('./tables');
const customer = require('./Customer');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes for html requests
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/tables', function (req, res) {
  res.sendFile(path.join(__dirname, 'viewTable.html'));
});

app.get('/reserve', function (req, res) {
  res.sendFile(path.join(__dirname, 'makeReservation.html'));
});

//API Calls
app.get('/api/tables', function (req, res) {
  res.json(tables);
});

// Create New Characters - takes in JSON input
app.post('/api/tables', function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  console.log(req.body);
  const newCustomer = req.body;
  console.log('the new customer is ' + JSON.stringify(newCustomer));
  console.log('length before update : ' + tables.confirmedCustomers.length);
  if (tables.confirmedCustomers.length < 5) {
    tables.confirmedCustomers.push(newCustomer);
    res.json({ confirmed: true });
  } else {
    tables.waitingList.push(newCustomer);
    res.json({ confirmed: false });
  }
  console.log('length after update : ' + tables.confirmedCustomers.length);
});

//start the server
app.listen(PORT, () => {
  //   init();
  console.log('Server is listning on port : ' + PORT);
});

function init() {
  let custmoer1 = new customer('Sujatha', '12345', 'abc@gmail.com', 1);
  tables.confirmedCustomers.push(custmoer1);

  let custmoer2 = new customer('Larry', '4556', 'larry@gmail.com', 2);
  tables.confirmedCustomers.push(custmoer2);

  let custmoer3 = new customer('Gayathri', '898898', 'abc@gmail.com', 3);
  tables.confirmedCustomers.push(custmoer3);

  let custmoer4 = new customer('Sandy', '12341225', 'Sandy@gmail.com', 4);
  tables.confirmedCustomers.push(custmoer4);
}
