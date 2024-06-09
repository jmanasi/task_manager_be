//User
class getAllUsers {
  constructor() {
    (this.Error = null), (this.Details = null);
  }
}
class addUser {
  constructor() {
    (this.Error = null), (this.Details = null);
  }
}
class editUser {
  constructor() {
    (this.Error = null), (this.Details = null);
  }
}
class deleteUser {
  constructor() {
    (this.Error = null), (this.Details = null);
  }
}

//Task
class getAllTasks {
  constructor() {
    (this.Error = null), (this.Details = null);
  }
}
class addTask {
  constructor() {
    (this.Error = null), (this.Details = null);
  }
}
class editTask {
  constructor() {
    (this.Error = null), (this.Details = null);
  }
}
class deleteTask {
  constructor() {
    (this.Error = null), (this.Details = null);
  }
}

//User
module.exports.getAllUsers = getAllUsers;
module.exports.addUser = addUser;
module.exports.editUser = editUser;
module.exports.deleteUser = deleteUser;

//Task
module.exports.getAllTasks = getAllTasks;
module.exports.addTask = addTask;
module.exports.editTask = editTask;
module.exports.deleteTask = deleteTask;
