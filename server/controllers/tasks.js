const Task = require('../models/task');

module.exports = {
  getAll: function (req, res) {
    Task.find()
      .then(task => res.json(task))
      .catch(err => res.json(err));    
  },

  getId: function (req, res) {   
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

  edit: async function (req, res) { 
    const task = new Task();
    let id = req.params.id;
    console.log("editandoooo");
    console.log(req.body)
    // Task.findOne({title: req.body.name})
    //     .then(task => {
    //     task.title = req.body.name;
    //     task.pets.push({title: req.body.title, description: req.body.description});
    //     return task.save();
    //     })
    //   .then(saveResult => res.json(saveResult))
    //   .catch(err => res.json(err));

      const filter = {title : req.body.title};
      const update = {title : req.params.title, description : req.params.description, completed : req.params.completed };
      const option = {new : true};
      const doc =  await Task.findOneAndUpdate(filter, update, option);
      console.log(doc.body);
      res.json(doc.body);
        

    // Task.updateOne({ _id: id },{
    //   _id : id, 
    //   $push : { pets : {title : req.params.title, 
    //                     description : req.params.description, 
    //                     completed : req.params.completed }}
    // })
    //   .then(updateTask => console.log("Tarea editadas " + updateTask))
    //   .catch((err) => res.json(err));
  },

  delete: function (req, res) {
    let id = req.params.id;    
    Task.deleteOne({ _id: id })
      .then(deletedTask => res.json(deletedTask))
      .catch((err) => res.json(err));
  }

};
