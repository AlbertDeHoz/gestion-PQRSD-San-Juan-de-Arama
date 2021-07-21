const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index');

const PORT = 5000;
const app = express();
require('dotenv').config();

app.use(morgan('dev'));
app.use(express.json());
app.use( express.urlencoded( {extended:true} ) );
app.use('/',routes);

require('./database/db')

app.listen(PORT,() => {console.log(`server up at Port ${PORT}`)})