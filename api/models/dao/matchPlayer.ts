import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, ModelStatic, NonAttribute, Sequelize } from "sequelize";
import Club, { ClubModel } from "./club";
import PhaseMatch, { PhaseMatchModel } from "./phaseMatch";
import Player, { PlayerModel } from "./player";
import dayjs from "dayjs";

type MatchPlayer = {
    id?: number;
    match_id: number;
    player_id: number;
    club_id: number;
    position: number;
    subtitute_id?: number;
    started_minute_at: number;
    ended_minute_at: number;
    created_at?: Date;
    updated_at?: Date;

    match?: PhaseMatch;
    player?: Player;
    club?: Club;
    subtitute?: MatchPlayer;
}

class MatchPlayerModel extends Model<InferAttributes<MatchPlayerModel>, InferCreationAttributes<MatchPlayerModel>> {
    declare id: CreationOptional<number>;
    declare match_id: number;
    declare player_id: number;
    declare club_id: number;
    declare position: number;
    declare subtitute_id: CreationOptional<number>;
    declare started_minute_at: number;
    declare ended_minute_at: number;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;

    declare match: NonAttribute<PhaseMatchModel>;
    declare player: NonAttribute<PlayerModel>;
    declare club: NonAttribute<ClubModel>;
    declare subtitute: NonAttribute<MatchPlayerModel>;
}

const InitMatchPlayer = (sequelize: Sequelize): ModelStatic<MatchPlayerModel> => {
    MatchPlayerModel.init(
        {
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            match_id: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            player_id: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            club_id: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            position: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            subtitute_id: {
                type: DataTypes.BIGINT,
                allowNull: true
            },
            started_minute_at: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            ended_minute_at: {
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
            tableName: 'match_players',
            timestamps: false,
            sequelize
        }
    )

    MatchPlayerModel.belongsTo(PhaseMatchModel, {
        foreignKey: 'match_id',
        as: 'match'
    })

    MatchPlayerModel.belongsTo(PlayerModel, {
        foreignKey: 'player_id',
        as: 'player'
    })

    MatchPlayerModel.belongsTo(ClubModel, {
        foreignKey: 'club_id',
        as: 'club'
    })

    MatchPlayerModel.belongsTo(MatchPlayerModel, {
        foreignKey: 'subtitute_id',
        as: 'subtitute_player'
    })
    
    return MatchPlayerModel
}

export default MatchPlayer
export {InitMatchPlayer, MatchPlayerModel}