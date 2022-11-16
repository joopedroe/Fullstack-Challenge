const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.CONNECTION_DB);
mongoose.Promise = global.Promise;

module.exports = mongoose;