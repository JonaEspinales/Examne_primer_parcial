const {connect}= require('mongoose');
const {MONGO_VEHICULO, MONGO_Auditoria} = require('./config')
const express = require('express')
const app = express();




// app.use(express.static(path.join(__dirname+'./public')));
// app.get('/', (req, res)=>{
    
// })



connect(MONGO_Auditoria).then(console.log("CONECTADO")).catch(err=> console.log(err));

app.listen(9000, ()=>{
    console.log("SERVER RUNNIG");
})