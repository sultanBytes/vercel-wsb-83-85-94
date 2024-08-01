const express = require('express');
const allroute = require('./src/app');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(allroute);

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});