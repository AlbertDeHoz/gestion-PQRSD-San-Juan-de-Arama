const express = require('express');
const morgan = require('morgan');
const path = require('path');
//middlewares
require('./database/db');

//Recibir acceder a los registros
let cors = require('cors');
const app = express();
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use( express.urlencoded( {extended:true} ) );

//rutas del servidor
const rutaUsuario = require('./routes/user')
app.use('/api/user',rutaUsuario);


app.set('port', 5000);

app.listen(app.get('port'),() => {console.log(`server up at Port: ${app.get('port')}`)});