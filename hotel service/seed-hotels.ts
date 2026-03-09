import sequelize from "./src/db/models/sequelize";

async function seed() {
    try {
        await sequelize.authenticate();
        console.log("Connected to database.");

        await sequelize.query(`
      INSERT INTO hotels (name, address, location, ratings, rating_count, "createdAt", "updatedAt")
      VALUES
        ('The Grand Palace', '42 Marine Drive, Colaba', 'Mumbai', 4.75, 320, NOW(), NOW()),
        ('Sunset Beach Resort', '15 Calangute Beach Road', 'Goa', 4.50, 215, NOW(), NOW()),
        ('Mountain View Lodge', '8 Mall Road, Manali', 'Himachal Pradesh', 4.20, 178, NOW(), NOW()),
        ('Royal Heritage Haveli', '23 Johari Bazaar Road', 'Jaipur', 4.85, 412, NOW(), NOW()),
        ('Lakeside Retreat Inn', '5 Dal Lake Boulevard', 'Srinagar', 4.60, 145, NOW(), NOW());
    `);

        console.log("5 mock hotels inserted successfully!");

        const [results] = await sequelize.query("SELECT * FROM hotels;");
        console.log("Current hotels in DB:");
        console.table(results);

        await sequelize.close();
        process.exit(0);
    } catch (err) {
        console.error("Seeding failed:", err);
        process.exit(1);
    }
}

seed();
