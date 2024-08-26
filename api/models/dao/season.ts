import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, ModelStatic, NonAttribute, Sequelize } from "sequelize";
import League, { LeagueModel } from "./league";
import dayjs from "dayjs";

type Season = {
    id?: number;
    league_id: number;
    name: string;
    started_at: Date;
    ended_at: Date;
    created_at?: Date;
    updated_at?: Date;

    league?: League;
}

class SeasonModel extends Model<InferAttributes<SeasonModel>, InferCreationAttributes<SeasonModel>> {
    declare id: CreationOptional<number>;
    declare league_id: ForeignKey<LeagueModel['id']>;
    declare name: string;
    declare started_at: Date;
    declare ended_at: Date;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;

    declare league: NonAttribute<LeagueModel>;
}

const InitSeason = (sequelize: Sequelize): ModelStatic<SeasonModel> => {
    SeasonModel.init(
        {
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            league_id: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            started_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: dayjs(),
            },
            ended_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: dayjs(),
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
            tableName: 'seasons',
            timestamps: false,
            sequelize
        }
    )

    SeasonModel.belongsTo(LeagueModel, {
        foreignKey: 'league_id',
        as: 'league'
    })

    return SeasonModel
}

export default Season
export {InitSeason, SeasonModel}