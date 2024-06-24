const mongose = require('mongoose')
require('dotenv').config()

mongose.set('strictQuery',true)

async function main(){
    await mongose.connect
    (`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.x8xgwyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("conectado com sucesso");
}

main().catch((err)=> console.log(err))