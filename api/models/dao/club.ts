import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, ModelStatic, NonAttribute, Sequelize } from "sequelize";
import League, { LeagueModel } from "./league";
import dayjs from "dayjs";

type Club = {
    id?: number;
    league_id: number;
    name: string;
    stadium: string;
    founded_year: string;
    manager: string;
    coach: string;
    created_at?: Date;
    updated_at?: Date;

    league?: League;
}

class ClubModel extends Model<InferAttributes<ClubModel>, InferCreationAttributes<ClubModel>> {
    declare id: CreationOptional<number>;
    declare league_id: ForeignKey<LeagueModel['id']>;
    declare name: string;
    declare stadium: string;
    declare founded_year: string;
    declare manager: string;
    declare coach: string;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;

    declare league: NonAttribute<LeagueModel>;
}

const InitClub = (sequelize: Sequelize): ModelStatic<ClubModel> => {
    ClubModel.init(
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
            stadium: {
                type: DataTypes.STRING,
                allowNull: false
            },
            founded_year: {
                type: DataTypes.STRING,
                allowNull: false
            },
            manager: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: ''
            },
            coach: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: ''
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
            tableName: 'clubs',
            timestamps: false,
            sequelize
        }
    )

    ClubModel.belongsTo(LeagueModel, {
        foreignKey: 'league_id',
        as: 'league'
    })

    return ClubModel
}

export default Club
export {InitClub, ClubModel}