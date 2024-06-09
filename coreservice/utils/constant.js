module.exports.errorCode = {
  applicationError: 500,
  dbError: 10005,
  invalidRequest: 10006,
  invalidUser: 10004,
  userDoesNotExist: 10005,
  inactiveUser: 10006,
  userNotLoggedIn: 10007,
  emailExist: 10008,
  contactNamePhoneExists: 10009,
  noUser: 10010,
  taskExists: 10011,
  noTask: 10012,
};

module.exports.errorMessage = {
  applicationError: "An Application Error Has Occured",
  dbError: "Database function error",
  invalidRequest: "Invalid Request",
  invalidUser: "Invalid User",
  userDoesNotExist: "User Does Not Exist",
  inactiveUser: "User Inactive",
  userNotLoggedIn: "User Is Not Logged In",
  emailExist: "Email Exists",
  contactNamePhoneExists: "This Contact Name And Number Already Exists",
  noUser: "This User Does Not Exists",
  taskExists: "Task Already Exists",
  noTask: "This Task Does Not Exists",
};
