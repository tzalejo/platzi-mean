import mongoose,{Schema } from 'mongoose';

const RespuestaSchema =  Schema({
  descripcion: { type: String,required:true},
  fechaCreada: {type: Date, default:Date.now,required: true}

});

export default mongoose.model('Respuesta',RespuestaSchema);
