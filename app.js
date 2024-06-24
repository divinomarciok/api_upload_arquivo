const express = require ('express');
const app = express();

require('dotenv').config();
require('./db.js')

const port =  process.env.PORT || 3000;

const pictureRouter = require('./routes/picture.js')

app.use('/pictures', pictureRouter)
app.listen(port,()=>{
    console.log(`O servidor esta rodando na porta http://localhost:${port}`);
});


