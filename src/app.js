const express = require('express');
const adminRoutes = require('./routes/admin');
require('./db/config');

const allroute = express.Router();

allroute.use('/admin', adminRoutes);

module.exports = allroute;