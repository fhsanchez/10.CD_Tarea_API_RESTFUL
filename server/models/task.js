const mongoose = require("mongoose");

// Creacion del esquema
const TaskSchema = new mongoose.Schema({
  title: { type: String, require: [true, 'title required'] },
  description: { type: String, require: [true, 'description required'] },
  completed: { type: Boolean, require: [true, 'completed required'] },
  created_at: { type: Date, require: [true, 'created_at required'] } ,
  updated_at: { type: Date, require: [true, 'updated_at required'] } 
}, { timestamps: true });


// crea un objeto que contenga métodos para que Mongoose interactúe con MongoDB
const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;

  