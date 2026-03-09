//tell database which database i am refering

import { Sequelize } from "sequelize";
import { dbConfig } from "../../config";

const sequelize = new Sequelize(dbConfig.DATABASE_URL, {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

export default sequelize;