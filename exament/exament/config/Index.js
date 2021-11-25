if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}


module.exports = {
    MONGO_Auditoria: process.env.MONGO_Auditoria
}