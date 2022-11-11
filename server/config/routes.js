const tasks = require("../controllers/tasks");


module.exports = function(app){

  // 1. Devuelve todas las Tasks
app.get("/tasks", (req, res) => {
    tasks.getAll(req, res);
  });
  
  // 2. Devuelve una Task por Id
  app.get("/tasks/:id", (req, res) => {
    tasks.getId(req, res);
  });
  
  // 3. Agrega una Task
  app.post("/tasks", (req, res) => {
    tasks.create(req, res);

  });
  
  // 4. Edita los datos de una Task
  app.put("/tasks/:id", (req, res) => {
    tasks.edit(req, res);

  });
  
  // 5. Elimina una Task
  app.delete("/tasks/:id", (req, res) => {
      tasks.delete(req, res)
  });

}