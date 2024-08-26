import dayjs from "dayjs";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, ModelStatic, Sequelize } from "sequelize";

type Player = {
    id?: number;
    name: string;
    positions: string[];
    birth_date: Date;
    nationality: string;
    height: number;
    photo_profile: string;
    created_at?: Date;
    updated_at?: Date;
}

class PlayerModel extends Model<InferAttributes<PlayerModel>, InferCreationAttributes<PlayerModel>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare positions: string[];
    declare birth_date: Date;
    declare nationality: string;
    declare height: number;
    declare photo_profile: string;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;
}

const InitPlayer = (sequelize: Sequelize): ModelStatic<PlayerModel> => {
    PlayerModel.init(
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
            positions: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false
            },
            birth_date: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            nationality: {
                type: DataTypes.STRING,
                allowNull: false
            },
            height: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            photo_profile: {
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
            tableName: 'players',
            timestamps: false,
            sequelize
        }
    )

    return PlayerModel
}

export default Player
export {InitPlayer, PlayerModel}