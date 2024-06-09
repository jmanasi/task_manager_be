const applib = require("applib");
// const applib = require("../../applib");
const momentTimezone = require("moment-timezone");
const { errorMessage, errorCode } = require("../utils/constant");
const { response, generateToken } = require("../utils/helper");
const { ErrorModel } = require("../models/error");
const requestModel = require("../models/request");
const responseModel = require("../models/response");
const userService = require("../services/user");
const validate = require("../utils/validate");
require("dotenv").config({ path: __dirname + "/.env" });
// require("dotenv").config();
//
const userController = {
  getAllUsers: async (req, res) => {
    let logger = new applib.Logger(req.originalUrl);

    logger.logInfo(`getAllUsers() invoked!!`);

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
      name: "getAllUsers",
      model: new responseModel.getAllUsers(),
    };

    try {
      let getAllUsersDBResult = await userService.getAllUsers(functionContext);
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
  addUser: async (req, res) => {
    let logger = new applib.Logger(req.originalUrl);

    logger.logInfo(`addUser() invoked!!`);

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
      name: "addUser",
      model: new responseModel.addUser(),
    };

    let addUserRequest = new requestModel.addUser(req);

    logger.logInfo(`addUser() :: Request Object :: ${addUserRequest}`);

    let validateRequest = validate.addUser(addUserRequest);
    if (validateRequest.error) {
      functionContext.error = new ErrorModel(
        validateRequest.error.details[0]["message"],
        errorCode.invalidRequest
      );
      logger.logInfo(
        `addUser() Error:: Invalid Request :: ${JSON.stringify(
          validateRequest
        )}`
      );
      response(functionContext, responseObj, null);
      return;
    }
    try {
      let addUserDBResult = await userService.addUser(
        functionContext,
        addUserRequest
      );

      response(functionContext, responseObj, addUserDBResult);
    } catch (errAddUser) {
      if (!errAddUser.ErrorMessage && !errAddUser.ErrorCode) {
        logger.logInfo(`addUserDBResult :: Error :: ${errAddUser}`);
        functionContext.error = new ErrorModel(
          errorMessage.applicationError,
          errorCode.applicationError
        );
      }
      logger.logInfo(
        `addUserDBResult :: Error :: ${JSON.stringify(errAddUser)}`
      );
      response(functionContext, responseObj, null);
    }
  },
  editUser: async (req, res) => {
    let logger = new applib.Logger(req.originalUrl);

    logger.logInfo(`editUser() invoked!!`);

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
      name: "editUser",
      model: new responseModel.editUser(),
    };

    let editUserRequest = new requestModel.editUser(req);

    logger.logInfo(`editUser() :: Request Object :: ${editUserRequest}`);

    let validateRequest = validate.editUser(editUserRequest);
    if (validateRequest.error) {
      functionContext.error = new ErrorModel(
        validateRequest.error.details[0]["message"],
        errorCode.invalidRequest
      );
      logger.logInfo(
        `editUser() Error:: Invalid Request :: ${JSON.stringify(
          validateRequest
        )}`
      );
      response(functionContext, responseObj, null);
      return;
    }
    try {
      let editUserDBResult = await userService.editUser(
        functionContext,
        editUserRequest
      );

      response(functionContext, responseObj, editUserDBResult);
    } catch (errEditUser) {
      if (!errEditUser.ErrorMessage && !errEditUser.ErrorCode) {
        logger.logInfo(`editUserDBResult :: Error :: ${errEditUser}`);
        functionContext.error = new ErrorModel(
          errorMessage.applicationError,
          errorCode.applicationError
        );
      }
      logger.logInfo(
        `editUserDBResult :: Error :: ${JSON.stringify(errEditUser)}`
      );
      response(functionContext, responseObj, null);
    }
  },
  deleteUser: async (req, res) => {
    let logger = new applib.Logger(req.originalUrl);

    logger.logInfo(`deleteUser() invoked!!`);

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
      name: "deleteUser",
      model: new responseModel.deleteUser(),
    };

    let deleteUserRequest = new requestModel.deleteUser(req);

    logger.logInfo(`deleteUser() :: Request Object :: ${deleteUserRequest}`);

    let validateRequest = validate.deleteUser(deleteUserRequest);
    if (validateRequest.error) {
      functionContext.error = new ErrorModel(
        validateRequest.error.details[0]["message"],
        errorCode.invalidRequest
      );
      logger.logInfo(
        `deleteUser() Error:: Invalid Request :: ${JSON.stringify(
          validateRequest
        )}`
      );
      response(functionContext, responseObj, null);
      return;
    }
    try {
      let deleteUserDBResult = await userService.deleteUser(
        functionContext,
        deleteUserRequest
      );

      response(functionContext, responseObj, deleteUserDBResult);
    } catch (errDeleteUser) {
      if (!errDeleteUser.ErrorMessage && !errDeleteUser.ErrorCode) {
        logger.logInfo(`deleteUserDBResult :: Error :: ${errDeleteUser}`);
        functionContext.error = new ErrorModel(
          errorMessage.applicationError,
          errorCode.applicationError
        );
      }
      logger.logInfo(
        `deleteUserDBResult :: Error :: ${JSON.stringify(errDeleteUser)}`
      );
      response(functionContext, responseObj, null);
    }
  },
};

module.exports = userController;
