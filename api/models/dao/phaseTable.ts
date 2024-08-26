import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, ModelStatic, NonAttribute, Sequelize } from "sequelize";
import Club, { ClubModel } from "./club";
import SeasonPhase, { SeasonPhaseModel } from "./seasonPhase";
import dayjs from "dayjs";

type PhaseTable = {
    id?: number;
    phase_id: number;
    club_id: number;
    table_group?: string;
    win: number;
    lose: number;
    draw: number;
    yellow_card: number;
    red_card: number;
    goals_for: number;
    goals_against: number;
    score: number;
    created_at?: Date;
    updated_at?: Date;

    phase?: SeasonPhase;
    club?: Club;
}

class PhaseTableModel extends Model<InferAttributes<PhaseTableModel>, InferCreationAttributes<PhaseTableModel>> {
    declare id: CreationOptional<number>;
    declare phase_id: ForeignKey<SeasonPhaseModel['id']>;
    declare club_id: ForeignKey<ClubModel['id']>;
    declare table_group: CreationOptional<string>;
    declare win: number;
    declare lose: number;
    declare draw: number;
    declare yellow_card: number;
    declare red_card: number;
    declare goals_for: number;
    declare goals_against: number;
    declare score: number;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;

    declare phase: NonAttribute<SeasonPhaseModel>;
    declare club: NonAttribute<ClubModel>;
}

const InitPhaseTable = (sequelize: Sequelize): ModelStatic<PhaseTableModel> => {
    PhaseTableModel.init(
        {
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            phase_id: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            club_id: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            table_group: {
                type: DataTypes.STRING,
                allowNull: false
            },
            win: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            lose: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            draw: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            yellow_card: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            red_card: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            goals_for: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            goals_against: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            score: {
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
            tableName: 'phase_tables',
            timestamps: false,
            sequelize
        }
    )

    PhaseTableModel.belongsTo(SeasonPhaseModel, {
        foreignKey: 'phase_id',
        as: 'phase'
    })

    PhaseTableModel.belongsTo(ClubModel, {
        foreignKey: 'club_id',
        as: 'club'
    })
    
    return PhaseTableModel
}

export default PhaseTable
export {InitPhaseTable, PhaseTableModel}