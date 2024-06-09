const dbconfig = require("../config/database");
const errorModel = require("../models/error");
const constant = require("../utils/constant");

const spamService = {
  addTask: async (functionContext, resolvedResult) => {
    let logger = functionContext.logger;

    logger.logInfo("addTask() :: DB :: Invoked !");

    try {
      let rows = await dbconfig.knex.raw(
        `CALL add_task(
          :title,
          :description,
          :status
          )`,
        {
          title: resolvedResult.title,
          description: resolvedResult.description,
          status: resolvedResult.status,
        }
      );
      return rows[0][0][0] ? rows[0][0][0] : null;
    } catch (err) {
      logger.logInfo(`addTask() :: Error :: ${JSON.stringify(err)}`);

      let errorCode = constant.errorCode.dbError;
      let errorMessage = constant.errorMessage.dbError;
      if (err.sqlState && err.sqlState == constant.errorCode.taskExists) {
        errorCode = constant.errorCode.taskExists;
        errorMessage = constant.errorMessage.taskExists;
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
  getAllTasks: async (functionContext, resolvedResult) => {
    let logger = functionContext.logger;

    logger.logInfo("getAllTasks() :: DB :: Invoked !");

    try {
      let rows = await dbconfig.knex.raw(
        `CALL get_all_tasks(

          )`
      );
      return rows[0][0] ? rows[0][0] : null;
    } catch (err) {
      logger.logInfo(`getAllTasks() :: Error :: ${JSON.stringify(err)}`);

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
  editTask: async (functionContext, resolvedResult) => {
    let logger = functionContext.logger;

    logger.logInfo("editTask() :: DB :: Invoked !");

    try {
      let rows = await dbconfig.knex.raw(
        `CALL edit_task(
          :taskRef,
          :description,
          :status
          )`,
        {
          taskRef: resolvedResult.taskRef,
          description: resolvedResult.description,
          status: resolvedResult.status,
        }
      );
      return rows[0][0][0] ? rows[0][0][0] : null;
    } catch (err) {
      logger.logInfo(`editTask() :: Error :: ${JSON.stringify(err)}`);

      let errorCode = constant.errorCode.dbError;
      let errorMessage = constant.errorMessage.dbError;
      if (err.sqlState && err.sqlState == constant.errorCode.noTask) {
        errorCode = constant.errorCode.noTask;
        errorMessage = constant.errorMessage.noTask;
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
  deleteTask: async (functionContext, resolvedResult) => {
    let logger = functionContext.logger;

    logger.logInfo("deleteTask() :: DB :: Invoked !");

    try {
      let rows = await dbconfig.knex.raw(
        `CALL delete_task(
          :taskRef
          )`,
        {
          taskRef: resolvedResult.taskRef,
        }
      );
      return rows[0][0][0] ? rows[0][0][0] : null;
    } catch (err) {
      logger.logInfo(`deleteTask() :: Error :: ${JSON.stringify(err)}`);

      let errorCode = constant.errorCode.dbError;
      let errorMessage = constant.errorMessage.dbError;
      if (err.sqlState && err.sqlState == constant.errorCode.noTask) {
        errorCode = constant.errorCode.noTask;
        errorMessage = constant.errorMessage.noTask;
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

module.exports = spamService;
