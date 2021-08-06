const mongoose = require('mongoose');
const BD_NAME = 'pqrsdsanjuan'
const MONGO_URI = process.env.MONGODB_URI
                 ? process.env.MONGODB_URI:`mongodb://localhost/${BD_NAME}`;

mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
})
const connection = mongoose.connection;
connection.once('open', () => console.log(`conectado a la BD: ${BD_NAME}`));
//`mongodb+srv://userpqrsd:Password4444@cluster0.odf3a.mongodb.net/${BD_NAME}?retryWrites=true&w=majority`