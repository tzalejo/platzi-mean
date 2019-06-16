import mongoose,{Schema } from 'mongoose';
import { Object } from 'core-js';

const RespuestaSchema =  Schema({
  descripcion: { type: String,required:true},
  fechaCreada: {type: Date, default:Date.now,required: true},
  usuario: {type: Schema.Types.ObjectId,ref: 'Usuario', required: true}

},{ versionKey: false });

export default mongoose.model('Respuesta',RespuestaSchema);
