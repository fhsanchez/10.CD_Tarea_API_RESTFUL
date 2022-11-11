const Task = require('../models/task');

module.exports = {
  getAll: function (req, res) {
    Task.find()
      .then(task => res.json(task))
      .catch(err => res.json(err));    
  },

  getId: function (req, res) {
    console.log("Entro a getId");
    console.log(req.params.id);
    Task.findOne({ _id: req.params.id })
      .then(task => res.json(task))
      .catch(err => res.json(err));    
  },

  create: function (req, res) {
    const task = new Task();
    console.log('Create ....') ;
    console.log(req.body);      
    task.title = req.body.title
    task.description = req.body.description
    task.completed = req.body.completed    
    task
      .save()
      .then(newOtterData => res.json(newOtterData))
      .catch((err) => console.log(err));

  },

  edit: function (req, res) {
    console.log("Entro a editar");
    const task = new Task();
  
    Task.findOne({ _id: req.params.id })
      .then((task) => {
        console.log("encontrado : " + task);
        res.render("form_nutria", { task: task });
        //res.redirect("/form_nutria");
      })
      .catch((err) => res.json(err));
  },

  delete: function (req, res) {
  
    console.log("Entro a delete");
    let id = req.params.id;
    
    Task.deleteOne({ _id: id })
      .then((deletedTask) => {       
        console.log("eliminado: " + deleteTask);
        res.redirect("/nutria");
      })
      .catch((err) => res.json(err));

  }

};
