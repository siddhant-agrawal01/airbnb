"use strict";
//up part is creating the hotels
//down , if i revert theis migration then it will drop the hotels table
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
  CREATE TABLE IF NOT EXIST hotels(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VAHRCHAR(255)NOT NULL,
  location VARCHAR(255) NOT NULL, 
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  
  
  );`);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.sequelize.query(`
      DROP TABLE IF  EXISTS hotels;`);
  },
};
