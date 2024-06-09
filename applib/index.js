require("dotenv").config({ path: __dirname + "/.env" });
// require("dotenv").config();
// rest of your code

let logger = require("./logger").LoggerModel;
let constant = require("./constant");
let jwt = require("jsonwebtoken");
const AWS = require("aws-sdk");
const getFileUploadConfig = require("./functions");
const fs = require("fs");

const { ErrorModel } = require("./error");

exports.SendHttpResponse = function (functionContext, response) {
  let httpResponseType = constant.ErrorCode.Success;
  functionContext.res.writeHead(httpResponseType, {
    "Content-Type": "application/json",
  });
  functionContext.responseText = JSON.stringify(response);
  functionContext.res.end(functionContext.responseText);
};

module.exports.fetchDBSettings = async function (
  logger,
  settings,
  databaseModule
) {
  try {
    logger.logInfo("fetchDBSettings()");
    let rows = await databaseModule.knex.raw(`CALL get_app_settings`);
    // let dbSettingsValue = rows[0][0][0];
    let dbSettingsValue = rows[0][0];
    logger.logInfo(
      `fetchDBSettings() successfull ${JSON.stringify(dbSettingsValue)}`
    );
    settings.APP_KEY = dbSettingsValue[0].value;
    settings.APP_SECRET = dbSettingsValue[1].value;
    return;
  } catch (errGetSettingsFromDB) {
    logger.logInfo("Error in fetchDBSettings()");
    throw errGetSettingsFromDB;
  }
};

module.exports.validateToken = async (req, res, next) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authtoken;

    if (!token) {
      return res.status(401).json({ error: "Authorization token missing" });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY);

    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ errorCode: 401, message: "Invalid token" });
  }
};

module.exports.Logger = logger;
module.exports.fileUploadConfig = getFileUploadConfig;
