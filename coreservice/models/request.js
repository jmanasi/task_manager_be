//User

class addUser {
  constructor(req) {
    this.name = req.body.name ? req.body.name : null;
    this.email = req.body.email ? req.body.email : null;
    this.username = req.body.username ? req.body.username : null;
    this.password = req.body.password ? req.body.password : null;
  }
}
class editUser {
  constructor(req) {
    this.userRef = req.body.userRef ? req.body.userRef : null;
    this.name = req.body.name ? req.body.name : null;
    this.username = req.body.username ? req.body.username : null;
    this.password = req.body.password ? req.body.password : null;
  }
}
class deleteUser {
  constructor(req) {
    this.userRef = req.query.userRef ? req.query.userRef : null;
  }
}

//Task
class addTask {
  constructor(req) {
    this.title = req.body.title ? req.body.title : null;
    this.description = req.body.description ? req.body.description : null;
    this.status = req.body.status ? req.body.status : 0;
  }
}
class editTask {
  constructor(req) {
    this.taskRef = req.body.taskRef ? req.body.taskRef : null;
    this.description = req.body.description ? req.body.description : null;
    this.status = req.body.status ? req.body.status : 0;
  }
}
class deleteTask {
  constructor(req) {
    this.taskRef = req.query.taskRef ? req.query.taskRef : null;
  }
}

//User
module.exports.addUser = addUser;
module.exports.editUser = editUser;
module.exports.deleteUser = deleteUser;

//Spam
module.exports.addTask = addTask;
module.exports.editTask = editTask;
module.exports.deleteTask = deleteTask;
