import mongoose,{ Schema } from 'mongoose';

const PreguntaSchema = new Schema({
  titulo: {type: String, required: true},
  descripcion: {type: String, required: true},
  fechaCreada: {type: Date, required: true, default : Date.now},
  icon: {type: String, required: true},
  usuario: {type: Schema.Types.ObjectId,ref: 'Usuario', required: true},
  respuestas: [{ type: Schema.Types.ObjectId, ref:'Respuesta',default:[] }]// un conjunto de respuesta, osea, un array
  
},{ versionKey: false });

export default mongoose.model('Pregunta',PreguntaSchema);
