const joi = require("joi");

//User
module.exports.addUser = (requestParams) => {
  let joiSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().required(),
  });
  return joiSchema.validate(requestParams);
};
module.exports.editUser = (requestParams) => {
  let joiSchema = joi.object({
    name: joi.string().required(),
    userRef: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().required(),
  });
  return joiSchema.validate(requestParams);
};
module.exports.deleteUser = (requestParams) => {
  let joiSchema = joi.object({
    userRef: joi.string().required(),
  });
  return joiSchema.validate(requestParams);
};

//Task
module.exports.addTask = (requestParams) => {
  let joiSchema = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    status: joi.number().required(),
  });
  return joiSchema.validate(requestParams);
};
module.exports.editTask = (requestParams) => {
  let joiSchema = joi.object({
    taskRef: joi.string().required(),
    description: joi.string().required(),
    status: joi.number().required(),
  });
  return joiSchema.validate(requestParams);
};
module.exports.deleteTask = (requestParams) => {
  let joiSchema = joi.object({
    taskRef: joi.string().required(),
  });
  return joiSchema.validate(requestParams);
};
