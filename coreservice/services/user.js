const dbconfig = require("../config/database");
const errorModel = require("../models/error");
const constant = require("../utils/constant");

const contactService = {
  addUser: async (functionContext, resolvedResult) => {
    let logger = functionContext.logger;

    logger.logInfo("addUser() :: DB :: Invoked !");

    try {
      let rows = await dbconfig.knex.raw(
        `CALL add_user(
          :name,
          :email,
          :username,
          :password
          )`,
        {
          name: resolvedResult.name,
          email: resolvedResult.email,
          username: resolvedResult.username,
          password: resolvedResult.password,
        }
      );
      return rows[0][0][0] ? rows[0][0][0] : null;
    } catch (err) {
      logger.logInfo(`addUser() :: Error :: ${JSON.stringify(err)}`);

      let errorCode = constant.errorCode.dbError;
      let errorMessage = constant.errorMessage.dbError;
      if (err.sqlState && err.sqlState == constant.errorCode.emailExist) {
        errorCode = constant.errorCode.emailExist;
        errorMessage = constant.errorMessage.emailExist;
      } else {
        errorCode = constant.errorCode.dbError;
        errorMessage = constant.errorMessage.dbError;
      }

      functionContext.error = new errorModel.ErrorModel(
        errorMessage,
        errorCode
      );

      throw functionContext.error;
    }
  },
  getAllUsers: async (functionContext, resolvedResult) => {
    let logger = functionContext.logger;

    logger.logInfo("getAllUsers() :: DB :: Invoked !");

    try {
      let rows = await dbconfig.knex.raw(
        `CALL get_all_users(

          )`
      );
      return rows[0][0] ? rows[0][0] : null;
    } catch (err) {
      logger.logInfo(`getAllUsers() :: Error :: ${JSON.stringify(err)}`);

      let errorCode = constant.errorCode.dbError;
      let errorMessage = constant.errorMessage.dbError;

      errorCode = constant.errorCode.dbError;
      errorMessage = constant.errorMessage.dbError;

      functionContext.error = new errorModel.ErrorModel(
        errorMessage,
        errorCode
      );

      throw functionContext.error;
    }
  },
  editUser: async (functionContext, resolvedResult) => {
    let logger = functionContext.logger;

    logger.logInfo("editUser() :: DB :: Invoked !");

    try {
      let rows = await dbconfig.knex.raw(
        `CALL edit_user(
          :userRef,
          :name,
          :username,
          :password
          )`,
        {
          userRef: resolvedResult.userRef,
          name: resolvedResult.name,
          username: resolvedResult.username,
          password: resolvedResult.password,
        }
      );
      return rows[0][0][0] ? rows[0][0][0] : null;
    } catch (err) {
      logger.logInfo(`editUser() :: Error :: ${JSON.stringify(err)}`);

      let errorCode = constant.errorCode.dbError;
      let errorMessage = constant.errorMessage.dbError;
      if (err.sqlState && err.sqlState == constant.errorCode.emailExist) {
        errorCode = constant.errorCode.emailExist;
        errorMessage = constant.errorMessage.emailExist;
      } else {
        errorCode = constant.errorCode.dbError;
        errorMessage = constant.errorMessage.dbError;
      }

      functionContext.error = new errorModel.ErrorModel(
        errorMessage,
        errorCode
      );

      throw functionContext.error;
    }
  },
  deleteUser: async (functionContext, resolvedResult) => {
    let logger = functionContext.logger;

    logger.logInfo("deleteUser() :: DB :: Invoked !");

    try {
      let rows = await dbconfig.knex.raw(
        `CALL delete_user(
          :userRef
          )`,
        {
          userRef: resolvedResult.userRef,
        }
      );
      return rows[0][0][0] ? rows[0][0][0] : null;
    } catch (err) {
      logger.logInfo(`deleteUser() :: Error :: ${JSON.stringify(err)}`);

      let errorCode = constant.errorCode.dbError;
      let errorMessage = constant.errorMessage.dbError;
      if (err.sqlState && err.sqlState == constant.errorCode.emailExist) {
        errorCode = constant.errorCode.emailExist;
        errorMessage = constant.errorMessage.emailExist;
      } else {
        errorCode = constant.errorCode.dbError;
        errorMessage = constant.errorMessage.dbError;
      }

      functionContext.error = new errorModel.ErrorModel(
        errorMessage,
        errorCode
      );

      throw functionContext.error;
    }
  },
};

module.exports = contactService;
