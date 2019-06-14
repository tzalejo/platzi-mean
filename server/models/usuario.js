import mongoose,{Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UsuarioSchema = new Schema({
  nombre: {type: String,required: true},
  apellido: {type: String, required:true},
  email: {type: String, required:true, unique: true, index: true},
  password: {type: String, required:true}
});
// podemos validar ciertos cammpos, email que sea unicoo e indexarlo..
UsuarioSchema.plugin(uniqueValidator);

export default mongoose.model('Usuario',UsuarioSchema);
