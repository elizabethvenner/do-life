var models = require('../models');

exports.index = function (req, res, next) {
  res.status(200).json({
    message: "Visit Japan"
  })
}

exports.tasks = function (req, res, next) {
  models.Task.findAll().then(function(tasks){
    res.status(200).json({
      tasks
    })
  })
}

exports.newTask = function (req, res, next) {
    console.log(req)
    models.Task.create({description: req.body.description, status: "not yet"
    }).then(function() {
    res.redirect('/');
  });
}

exports.homepage = function(req, res, next) {
  res.redirect('index.html');
}
