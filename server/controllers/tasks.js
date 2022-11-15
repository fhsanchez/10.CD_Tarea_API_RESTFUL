const Task = require("../models/task");

module.exports = {
  getAll: function (req, res) {
    Task.find()
      .then((task) => res.json(task))
      .catch((err) => res.json(err));
  },

  getId: function (req, res) {
    Task.findOne({ _id: req.params.id })
      .then((task) => res.json(task))
      .catch((err) => res.json(err));
  },

  create: function (req, res) {
    const task = new Task();
    console.log("Create ....");
    console.log(req.body);
    task.title = req.body.title;
    task.description = req.body.description;
    task.completed = req.body.completed;
    task
      .save()
      .then((newOtterData) => res.json(newOtterData))
      .catch((err) => console.log(err));
  },

  edit: async function (req, res) {
    //const task = new Task();
    //let id = req.params.id;
    //console.log("editandoooo");
    console.log("controller edit");
   
    const id = req.params.id;
    const body = req.body;
    console.log(body);
    console.log(id);
 
    const data =  Task.updateOne({ _id: id } , body )
      .then((task) => res.json( { message : "success",  task }))
      .catch((err) => res.json( { message : "fault",  error  : err}));
  },

  delete: function (req, res) {
    let id = req.params.id;
    Task.deleteOne({ _id: id })
      .then((deletedTask) => res.json(deletedTask))
      .catch((err) => res.json(err));
  },
};
