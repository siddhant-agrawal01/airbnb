require("ts-node/register");

const config = require("./db.config").default || require("./db.config");
module.exports = config;
