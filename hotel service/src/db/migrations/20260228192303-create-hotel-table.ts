"use strict";

import { QueryInterface } from "sequelize";

//up part is creating the hotels
//down , if i revert theis migration then it will drop the hotels table
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
  CREATE TABLE IF NOT EXISTS hotels(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL, 
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS hotels;`);
  },
};
