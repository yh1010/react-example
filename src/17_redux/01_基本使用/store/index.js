const { createStore } = require("redux");

const reducer = require("./reducer");

// 3.创建的store
const store = createStore(reducer);

module.exports = store;
