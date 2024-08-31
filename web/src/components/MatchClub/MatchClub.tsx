import { FC } from "react";
import styles from "./MatchClub.module.css";
import HalfField from "../HalfField/HalfField";
import Player, { PlayerShirtNamePosition } from "../Player/Player";
import ClubPlayer from "../../models/clubPlayer";

interface MatchClubProps {
    id: number;
    name: string;
    coach: string;
    icon: string;
    score: string;

    players: ClubPlayer[];
    sub_players?: ClubPlayer[];
}

const MatchClub: FC<MatchClubProps> = ({
    id,
    name,
    coach,
    icon,
    score,
    players,
    sub_players
}) => {
    let max_row_pos = 0;
    let grouped_positions = {} as { [key: number]: number };
    for (let i = 0; i < players.length; i++) {
        let row_pos = Math.trunc(players[i].position / 10);
        if (row_pos > max_row_pos) {
            max_row_pos = row_pos
        }

        if (!(row_pos in grouped_positions)) {
            grouped_positions[row_pos] = 0
        }

        grouped_positions[row_pos] += 1
    }

    max_row_pos += 1

    const getPosition = (pos: number, max_row_pos: number, grouped_pos: { [key: number]: number }): { [key: string]: string } => {
        const row_pos = Math.trunc(pos / 10);
        const col_pos = pos % 10;

        const row_pos_count = grouped_pos[row_pos];

        return {
            "left": `${100/(row_pos_count + 1) * (col_pos + 1)}%`,
            "transform": "translateX(-50%)",
            "top": `${(83/(max_row_pos - 1)) * row_pos + 3}%`
        }
    }

    let player_elements = [];
    for (let i = 0; i < players.length; i++) {
        player_elements.push(
            <Player 
                id={players[i].id} 
                shirt_number={players[i].shirt_number} 
                shirt_name={players[i].shirt_name} 
                style={{...getPosition(players[i].position, max_row_pos, grouped_positions), position: 'absolute'}}
                yellow_card_count={players[i].yellow_card_count}
                red_card_count={players[i].red_card_count}
                is_subbed_in={players[i].subbed_in_at !== undefined}
                is_subbed_out={players[i].subbed_out_at !== undefined}
                goal={players[i].goal}
                is_captain={players[i].is_captain}
            />
        )
    }

    sub_players = sub_players === undefined ? [] : sub_players
    let sub_player_elements = [];
    for (let i = 0; i < sub_players!.length; i++) {
        sub_player_elements.push(
            <Player
                id={sub_players[i].id}
                shirt_number={sub_players[i].shirt_number}
                shirt_name={sub_players[i].shirt_name}
                name_position={PlayerShirtNamePosition.Right}
                yellow_card_count={sub_players[i].yellow_card_count}
                red_card_count={sub_players[i].red_card_count}
                is_subbed_in={sub_players[i].subbed_in_at !== undefined}
                is_subbed_out={sub_players[i].subbed_out_at !== undefined}
                goal={sub_players[i].goal}
                is_captain={sub_players[i].is_captain}
            />
        )
    }

    return (
        <div key={`club-${id}`} className={styles.match__club}>
            <div className={styles.match__club__properties}>
                <img src={icon} alt={name} className={styles.match__club__properties__icon} />
                <span className={styles.match__club__properties__name}>{name}</span>
                <span className={styles.match__club__properties__coach}>{coach}</span>
                <div className={styles.match__club__properties__score}>
                    <span>{score}</span>
                </div>
            </div>
            <div className={styles.match__club__fieldplayer}>
                <div className={styles.match__club__fieldplayer__field}>
                    <HalfField />
                    <div className={styles.match__club__fieldplayer__starting}>
                        {player_elements}
                    </div>
                </div>
                {
                    sub_player_elements.length > 0 ? (
                        <div className={styles.match__club__fieldplayer__sub}>
                            {sub_player_elements}
                        </div>
                    ): null
                }
            </div>
        </div>
    )
}

export default MatchClub;