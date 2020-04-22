//this will be our server .

const express = require('express');

const PORT = 3000;
const app = express();

//start the server
app.listen(PORT)

const tables = [
    {
    customerName: "sds",
    phoneNumber: "213131",
    customerEmail: "sds@gsdfds.com",
    customerID: "1"
    },
    {
    customerName: "sds",
    phoneNumber: "1212",
    customerEmail: "2121",
    customerID: "212"
    },
    {
    customerName: "45454",
    phoneNumber: "54545",
    customerEmail: "5454",
    customerID: "454"
    },
    {
    customerName: "55",
    phoneNumber: "545",
    customerEmail: "454",
    customerID: "454"
    },
    {
    customerName: "454",
    phoneNumber: "4545",
    customerEmail: "4545",
    customerID: "5454"
    }
    ]