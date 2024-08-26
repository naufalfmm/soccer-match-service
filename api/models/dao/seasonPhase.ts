import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, ModelStatic, NonAttribute, Sequelize } from "sequelize";
import Season, { SeasonModel } from "./season";
import dayjs from "dayjs";

type SeasonPhase = {
    id?: number;
    season_id: number;
    name: string;
    level: number;
    table_calculation: string;
    table_rule: object;
    type: string;
    created_at?: Date;
    updated_at?: Date;

    season?: Season;
}

class SeasonPhaseModel extends Model<InferAttributes<SeasonPhaseModel>, InferCreationAttributes<SeasonPhaseModel>> {
    declare id: CreationOptional<number>;
    declare season_id: number;
    declare name: string;
    declare level: number;
    declare table_calculation: string;
    declare table_rule: object;
    declare type: string;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;

    declare season?: NonAttribute<SeasonModel>;
}

const InitSeasonPhase = (sequelize: Sequelize): ModelStatic<SeasonPhaseModel> => {
    SeasonPhaseModel.init(
        {
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            season_id: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            level: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
            },
            table_calculation: {
                type: DataTypes.STRING,
                allowNull: false
            },
            table_rule: {
                type: DataTypes.JSONB,
                allowNull: false
            },
            type: {
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
            tableName: 'season_phases',
            timestamps: false,
            sequelize
        }
    )

    SeasonPhaseModel.belongsTo(SeasonModel, {
        foreignKey: 'season_id',
        as: 'season'
    })

    return SeasonPhaseModel
}

export default SeasonPhase
export {InitSeasonPhase, SeasonPhaseModel}