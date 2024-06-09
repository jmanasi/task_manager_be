const applib = require("applib");
// const applib = require("../../applib");
const momentTimezone = require("moment-timezone");
const { errorMessage, errorCode } = require("../utils/constant");
const { response, generateToken } = require("../utils/helper");
const { ErrorModel } = require("../models/error");
const requestModel = require("../models/request");
const responseModel = require("../models/response");
const taskService = require("../services/task");
const validate = require("../utils/validate");
require("dotenv").config({ path: __dirname + "/.env" });
// require("dotenv").config();

const teamController = {
  getAllTasks: async (req, res) => {
    let logger = new applib.Logger(req.originalUrl);

    logger.logInfo(`getAllTasks() invoked!!`);

    let functionContext = {
      error: null,
      res: res,
      logger: logger,
      currentTs: momentTimezone
        .utc(new Date(), "YYYY-MM-DD HH:mm:ss")
        .tz("Asia/Kolkata")
        .format("YYYY-MM-DD HH:mm:ss "),
    };

    const responseObj = {
      name: "getAllTasks",
      model: new responseModel.getAllTasks(),
    };

    try {
      let getAllUsersDBResult = await taskService.getAllTasks(functionContext);
      response(functionContext, responseObj, getAllUsersDBResult);
    } catch (errGetAllUsers) {
      if (!errGetAllUsers.ErrorMessage && !errGetAllUsers.ErrorCode) {
        logger.logInfo(`getAllUsersDBResult :: Error :: ${errGetAllUsers}`);
        functionContext.error = new ErrorModel(
          errorMessage.applicationError,
          errorCode.applicationError
        );
      }
      logger.logInfo(
        `getAllUsersDBResult :: Error :: ${JSON.stringify(errGetAllUsers)}`
      );
      response(functionContext, responseObj, null);
    }
  },
  addTask: async (req, res) => {
    let logger = new applib.Logger(req.originalUrl);

    logger.logInfo(`addTask() invoked!!`);

    let functionContext = {
      error: null,
      res: res,
      logger: logger,
      currentTs: momentTimezone
        .utc(new Date(), "YYYY-MM-DD HH:mm:ss")
        .tz("Asia/Kolkata")
        .format("YYYY-MM-DD HH:mm:ss "),
    };

    const responseObj = {
      name: "addTask",
      model: new responseModel.addTask(),
    };

    let addTaskRequest = new requestModel.addTask(req);

    logger.logInfo(`addTask() :: Request Object :: ${addTaskRequest}`);

    let validateRequest = validate.addTask(addTaskRequest);
    if (validateRequest.error) {
      functionContext.error = new ErrorModel(
        validateRequest.error.details[0]["message"],
        errorCode.invalidRequest
      );
      logger.logInfo(
        `addTask() Error:: Invalid Request :: ${JSON.stringify(
          validateRequest
        )}`
      );
      response(functionContext, responseObj, null);
      return;
    }
    try {
      let addTaskDBResult = await taskService.addTask(
        functionContext,
        addTaskRequest
      );

      response(functionContext, responseObj, addTaskDBResult);
    } catch (errAddTask) {
      if (!errAddTask.ErrorMessage && !errAddTask.ErrorCode) {
        logger.logInfo(`addTaskDBResult :: Error :: ${errAddTask}`);
        functionContext.error = new ErrorModel(
          errorMessage.applicationError,
          errorCode.applicationError
        );
      }
      logger.logInfo(
        `addTaskDBResult :: Error :: ${JSON.stringify(errAddTask)}`
      );
      response(functionContext, responseObj, null);
    }
  },
  editTask: async (req, res) => {
    let logger = new applib.Logger(req.originalUrl);

    logger.logInfo(`editTask() invoked!!`);

    let functionContext = {
      error: null,
      res: res,
      logger: logger,
      currentTs: momentTimezone
        .utc(new Date(), "YYYY-MM-DD HH:mm:ss")
        .tz("Asia/Kolkata")
        .format("YYYY-MM-DD HH:mm:ss "),
    };

    const responseObj = {
      name: "editTask",
      model: new responseModel.editTask(),
    };

    let editTaskRequest = new requestModel.editTask(req);

    logger.logInfo(`editTask() :: Request Object :: ${editTaskRequest}`);

    let validateRequest = validate.editTask(editTaskRequest);
    if (validateRequest.error) {
      functionContext.error = new ErrorModel(
        validateRequest.error.details[0]["message"],
        errorCode.invalidRequest
      );
      logger.logInfo(
        `editTask() Error:: Invalid Request :: ${JSON.stringify(
          validateRequest
        )}`
      );
      response(functionContext, responseObj, null);
      return;
    }
    try {
      let editTaskDBResult = await taskService.editTask(
        functionContext,
        editTaskRequest
      );

      response(functionContext, responseObj, editTaskDBResult);
    } catch (errEditTask) {
      if (!errEditTask.ErrorMessage && !errEditTask.ErrorCode) {
        logger.logInfo(`editTaskDBResult :: Error :: ${errEditTask}`);
        functionContext.error = new ErrorModel(
          errorMessage.applicationError,
          errorCode.applicationError
        );
      }
      logger.logInfo(
        `editTaskDBResult :: Error :: ${JSON.stringify(errEditTask)}`
      );
      response(functionContext, responseObj, null);
    }
  },
  deleteTask: async (req, res) => {
    let logger = new applib.Logger(req.originalUrl);

    logger.logInfo(`deleteTask() invoked!!`);

    let functionContext = {
      error: null,
      res: res,
      logger: logger,
      currentTs: momentTimezone
        .utc(new Date(), "YYYY-MM-DD HH:mm:ss")
        .tz("Asia/Kolkata")
        .format("YYYY-MM-DD HH:mm:ss "),
    };

    const responseObj = {
      name: "deleteTask",
      model: new responseModel.deleteTask(),
    };

    let deleteTaskRequest = new requestModel.deleteTask(req);

    logger.logInfo(`deleteTask() :: Request Object :: ${deleteTaskRequest}`);

    let validateRequest = validate.deleteTask(deleteTaskRequest);
    if (validateRequest.error) {
      functionContext.error = new ErrorModel(
        validateRequest.error.details[0]["message"],
        errorCode.invalidRequest
      );
      logger.logInfo(
        `deleteTask() Error:: Invalid Request :: ${JSON.stringify(
          validateRequest
        )}`
      );
      response(functionContext, responseObj, null);
      return;
    }
    try {
      let deleteTaskDBResult = await taskService.deleteTask(
        functionContext,
        deleteTaskRequest
      );

      response(functionContext, responseObj, deleteTaskDBResult);
    } catch (errDeleteTask) {
      if (!errDeleteTask.ErrorMessage && !errDeleteTask.ErrorCode) {
        logger.logInfo(`deleteTaskDBResult :: Error :: ${errDeleteTask}`);
        functionContext.error = new ErrorModel(
          errorMessage.applicationError,
          errorCode.applicationError
        );
      }
      logger.logInfo(
        `deleteTaskDBResult :: Error :: ${JSON.stringify(errDeleteTask)}`
      );
      response(functionContext, responseObj, null);
    }
  },
};

module.exports = teamController;
