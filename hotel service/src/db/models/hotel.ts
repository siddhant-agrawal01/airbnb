import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class Hotel extends Model<InferAttributes<Hotel>, InferCreationAttributes<Hotel>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare address: string;
    declare location: string;
    declare rating?: number;
    declare ratingCount?: number;
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
        field: "ratings",
        defaultValue: null
    },
    ratingCount: {
        type: "INTEGER",
        field: "rating_count",
        defaultValue: null,
    },
    createdAt: {
        type: "DATE",
        field: "createdAt",
        defaultValue: new Date(),
    },
    updatedAt: {
        type: "DATE",
        field: "updatedAt",
        defaultValue: new Date(),
    }
}, {
    tableName: "hotels",
    sequelize: sequelize,
    underscored: false,
    timestamps: true
});
export default Hotel;