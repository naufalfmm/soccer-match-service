import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, ModelStatic, NonAttribute, Sequelize } from "sequelize";
import MatchPlayer, { MatchPlayerModel } from "./matchPlayer";
import dayjs from "dayjs";

type MatchPlayerGoal = {
    id?: number;
    match_player_id: number;
    goal_minute_at: number;
    created_at?: Date;
    updated_at?: Date;

    match_player?: MatchPlayer;
}

class MatchPlayerGoalModel extends Model<InferAttributes<MatchPlayerGoalModel>, InferCreationAttributes<MatchPlayerGoalModel>> {
    declare id: CreationOptional<number>;
    declare match_player_id: number;
    declare goal_minute_at: number;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;

    declare match_player: NonAttribute<MatchPlayerModel>;
}

const InitMatchPlayerGoal = (sequelize: Sequelize): ModelStatic<MatchPlayerGoalModel> => {
    MatchPlayerGoalModel.init(
        {
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            match_player_id: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            goal_minute_at: {
                type: DataTypes.INTEGER,
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
            tableName: 'match_player_goals',
            timestamps: false,
            sequelize
        }
    )

    MatchPlayerGoalModel.belongsTo(MatchPlayerModel, {
        foreignKey: 'match_player_id',
        as: 'match_player'
    })
    
    return MatchPlayerGoalModel
}

export default MatchPlayerGoal
export {InitMatchPlayerGoal, MatchPlayerGoalModel}