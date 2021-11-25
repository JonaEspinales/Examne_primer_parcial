const {Schema, model} = require('mongoose')

const vehiculo =  new Schema(
    {
        FechaTransiciom : {type: String},
        Descripcion : {type: String},
        Horatransicion : {type: String},
        Usuario: {type: Number},
        DetalleTransicion : {type: Number},
        Cambios : {type: Number},
        tablas : {type: String},
        Tipo_de_error :{type: Error}
    }

)

module.exports = model("Vehiculo", vehiculo);