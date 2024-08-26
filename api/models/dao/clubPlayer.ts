import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, ModelStatic, NonAttribute, Sequelize } from "sequelize";
import Club, { ClubModel } from "./club";
import Player, { PlayerModel } from "./player";
import dayjs from "dayjs";

type ClubPlayer = {
    player_id: number;
    club_id: number;
    joined_at: Date;
    transferred_at?: Date;
    joined_idx: number;
    created_at?: Date;
    updated_at?: Date;

    player?: Player;
    club?: Club;
}

class ClubPlayerModel extends Model<InferAttributes<ClubPlayerModel>, InferCreationAttributes<ClubPlayerModel>> {
    declare player_id: ForeignKey<PlayerModel['id']>;
    declare club_id: ForeignKey<ClubModel['id']>;
    declare joined_at: Date;
    declare transferred_at: CreationOptional<Date>;
    declare joined_idx: number;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;

    declare player: NonAttribute<PlayerModel>;
    declare club: NonAttribute<ClubModel>;
}

const InitClubPlayer = (sequelize: Sequelize): ModelStatic<ClubPlayerModel> => {
    ClubPlayerModel.init(
        {
            player_id: {
                type: DataTypes.BIGINT,
                primaryKey: true
            },
            club_id: {
                type: DataTypes.BIGINT,
                primaryKey: true
            },
            joined_at: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            transferred_at: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            joined_idx: {
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue: dayjs().unix()
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
            tableName: 'club_players',
            timestamps: false,
            sequelize
        }
    )

    ClubPlayerModel.belongsTo(PlayerModel, {
        foreignKey: 'player_id',
        as: 'player'
    })

    ClubPlayerModel.belongsTo(ClubModel, {
        foreignKey: 'club_id',
        as: 'club'
    })
    
    return ClubPlayerModel
}

export default ClubPlayer
export {InitClubPlayer, ClubPlayerModel}