const express = require('express');
const allroute = require('./src/app');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(allroute);

app.listen(5000, ()=>{
    console.log(`server is running on port 5000`);
});