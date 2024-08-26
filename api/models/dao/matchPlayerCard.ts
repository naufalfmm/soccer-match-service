import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, ModelStatic, NonAttribute, Sequelize } from "sequelize";
import MatchPlayer, { MatchPlayerModel } from "./matchPlayer";
import dayjs from "dayjs";

enum CardType {
    Yellow = "yellow",
    Red = "red"
}

type MatchPlayerCard = {
    id?: number;
    match_player_id: number;
    card_minute_at: number;
    card: CardType;
    created_at?: Date;
    updated_at?: Date;

    match_player?: MatchPlayer;
}

class MatchPlayerCardModel extends Model<InferAttributes<MatchPlayerCardModel>, InferCreationAttributes<MatchPlayerCardModel>> {
    declare id: CreationOptional<number>;
    declare match_player_id: number;
    declare card_minute_at: number;
    declare card: CardType;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;

    declare match_player: NonAttribute<MatchPlayerModel>;
}

const InitMatchPlayerCard = (sequelize: Sequelize): ModelStatic<MatchPlayerCardModel> => {
    MatchPlayerCardModel.init(
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
            card_minute_at: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            card: {
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
            tableName: 'match_player_goals',
            timestamps: false,
            sequelize
        }
    )

    MatchPlayerCardModel.belongsTo(MatchPlayerModel, {
        foreignKey: 'match_player_id',
        as: 'match_player'
    })
    
    return MatchPlayerCardModel
}

export default MatchPlayerCard
export {InitMatchPlayerCard, MatchPlayerCardModel, CardType}