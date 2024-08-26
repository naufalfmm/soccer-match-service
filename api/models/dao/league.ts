import dayjs from "dayjs";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, ModelStatic, Sequelize } from "sequelize";

type League = {
    id?: number;
    name: string;
    organizer: string;
    association: string;
    created_at?: Date;
    updated_at?: Date;
}

class LeagueModel extends Model<InferAttributes<LeagueModel>, InferCreationAttributes<LeagueModel>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare organizer: string;
    declare association: string;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;
}

const InitLeague = (sequelize: Sequelize): ModelStatic<LeagueModel> => {
    LeagueModel.init(
        {
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            organizer: {
                type: DataTypes.STRING,
                allowNull: false
            },
            association: {
                type: DataTypes.STRING,
                allowNull: false
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: dayjs(),
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: dayjs(),
            }
        },
        {
            tableName: 'leagues',
            timestamps: false,
            sequelize
        }
    )

    return LeagueModel
}

export default League
export {InitLeague, LeagueModel}