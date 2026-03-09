"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = exports.serverConfig = void 0;
// This file contains all the basic configuration logic for the app server to work
var dotenv_1 = require("dotenv");
function loadEnv() {
    dotenv_1.default.config();
    console.log("Environment variables loaded");
}
loadEnv();
exports.serverConfig = {
    PORT: Number(process.env.PORT) || 3001
};
exports.dbConfig = {
    DATABASE_URL: process.env.DATABASE_URL,
    DB_NAME: process.env.DB_NAME
};
