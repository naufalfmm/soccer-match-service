import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, ModelStatic, NonAttribute, Sequelize } from "sequelize";
import Club, { ClubModel } from "./club";
import dayjs from "dayjs";

type PhaseMatch = {
    id?: number;
    minutes_total: number;
    first_club_id: number;
    second_club_id: number;
    first_club_score: number;
    second_club_score: number;
    first_club_formation: string;
    second_club_formation: string;
    first_club_yellow_cards: number;
    first_club_red_cards: number;
    second_club_yellow_cards: number;
    second_club_red_cards: number;
    created_at?: Date;
    updated_at?: Date;

    first_club?: Club;
    second_club?: Club;
}

class PhaseMatchModel extends Model<InferAttributes<PhaseMatchModel>, InferCreationAttributes<PhaseMatchModel>> {
    declare id: CreationOptional<number>;
    declare minutes_total: number;
    declare first_club_id: ForeignKey<ClubModel['id']>;
    declare second_club_id: ForeignKey<ClubModel['id']>;
    declare first_club_score: number;
    declare second_club_score: number;
    declare first_club_formation: string;
    declare second_club_formation: string;
    declare first_club_yellow_cards: number;
    declare first_club_red_cards: number;
    declare second_club_yellow_cards: number;
    declare second_club_red_cards: number;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;

    declare first_club: NonAttribute<ClubModel>;
    declare second_club: NonAttribute<ClubModel>;
}

const InitPhaseMatch = (sequelize: Sequelize): ModelStatic<PhaseMatchModel> => {
    PhaseMatchModel.init(
        {
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            minutes_total: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            first_club_id: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            second_club_id: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            first_club_score: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            second_club_score: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            first_club_formation: {
                type: DataTypes.STRING,
                allowNull: false
            },
            second_club_formation: {
                type: DataTypes.STRING,
                allowNull: false
            },
            first_club_yellow_cards: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            first_club_red_cards: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            second_club_yellow_cards: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            second_club_red_cards: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
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
            tableName: 'phase_matches',
            timestamps: false,
            sequelize
        }
    )

    PhaseMatchModel.belongsTo(ClubModel, {
        foreignKey: 'first_club_id',
        as: 'first_club'
    })

    PhaseMatchModel.belongsTo(ClubModel, {
        foreignKey: 'second_club_id',
        as: 'second_club'
    })

    return PhaseMatchModel
}

export default PhaseMatch
export {InitPhaseMatch, PhaseMatchModel}