const express = require('express');

const adminRoutes = express.Router();

adminRoutes.get('/', (req, res)=>{
    res.status(200).json({msg:'hello'})
});

module.exports = adminRoutes