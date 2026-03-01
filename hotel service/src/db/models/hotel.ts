import { CreationOptional, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import sequelize from "./sequelize";

class Hotel extends Model<InferAttributes<Hotel>, InferCreationAttributes<Hotel>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare address: string;
    declare location: string;
    declare rating: number;
    declare ratingCount: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Hotel.init({
    id: {
        type: "INTEGER",
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: "STRING",
        allowNull: false
    },
    address: {
        type: "STRING",
        allowNull: false
    },
    location: {
        type: "STRING",
        allowNull: false
    },
    rating: {
        type: "FLOAT",
        defaultValue: null
    },
    ratingCount: {
        type: "INTEGER",
        defaultValue: null,
    },
    createdAt: {
        type: "DATE",
        defaultValue: new Date(),
    },
    updatedAt: {
        type: "DATE",
        defaultValue: new Date(),
    }
}, {
    tableName: "hotels",
    sequelize: sequelize,
    underscored: true,
    timestamps: true
});
export default Hotel;