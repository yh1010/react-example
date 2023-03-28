const { CHANGE_NAME } = require("./constants");

const changeName = (name) => ({ type: CHANGE_NAME, name: name });

module.exports = {
  changeName
};
