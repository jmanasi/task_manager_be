const router = require("express").Router();
// const applib = require("applib");
const applib = require("../../applib");

// controllers
const userController = require("../controllers/user");
const taskController = require("../controllers/task");

//User
router.post("/addUser", userController.addUser);
router.put("/editUser", applib.validateToken, userController.editUser);
router.get("/getUsers", applib.validateToken, userController.getAllUsers);
router.delete("/deleteUser", applib.validateToken, userController.deleteUser);

//task
router.post("/addTask", applib.validateToken, taskController.addTask);
router.put("/editTask", applib.validateToken, taskController.editTask);
router.get("/getTasks", applib.validateToken, taskController.getAllTasks);
router.delete("/deleteTask", applib.validateToken, taskController.deleteTask);

module.exports = router;
