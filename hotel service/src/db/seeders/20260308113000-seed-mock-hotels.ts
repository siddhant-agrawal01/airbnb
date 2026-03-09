"use strict";

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      INSERT INTO hotels (name, address, location, ratings, rating_count, "createdAt", "updatedAt")
      VALUES
        ('The Grand Palace', '42 Marine Drive, Colaba', 'Mumbai', 4.75, 320, NOW(), NOW()),
        ('Sunset Beach Resort', '15 Calangute Beach Road', 'Goa', 4.50, 215, NOW(), NOW()),
        ('Mountain View Lodge', '8 Mall Road, Manali', 'Himachal Pradesh', 4.20, 178, NOW(), NOW()),
        ('Royal Heritage Haveli', '23 Johari Bazaar Road', 'Jaipur', 4.85, 412, NOW(), NOW()),
        ('Lakeside Retreat Inn', '5 Dal Lake Boulevard', 'Srinagar', 4.60, 145, NOW(), NOW());
    `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      DELETE FROM hotels
      WHERE name IN (
        'The Grand Palace',
        'Sunset Beach Resort',
        'Mountain View Lodge',
        'Royal Heritage Haveli',
        'Lakeside Retreat Inn'
      );
    `);
  },
};
