const express = require('express');
const app = express()

var cors = require('cors')

const { dbConnection } = require('./db/config');
require('dotenv').config();

dbConnection();


app.use(cors())
app.use(express.static('public'));
app.use(express.json());


app.use('/api/auth', require('./routes/auth'));




app.listen(process.env.PORT, () => {
    console.log(`Server running in http://localhost:${process.env.PORT}/`);
});