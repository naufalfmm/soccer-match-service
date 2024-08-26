import { CSSProperties, FC } from "react";
import styles from "./Player.module.css";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { ReactComponent as SoccerBall } from "../../assets/svg/soccerball.svg";

enum PlayerShirtNamePosition {
    Right = "right",
    Bottom = "bottom"
}

interface PlayerProps {
    id: number;
    shirt_number: number;
    shirt_name: string;

    yellow_card_count?: number;
    red_card_count?: number;
    is_subbed_out?: boolean;
    is_subbed_in?: boolean;
    goal?: number;

    style?: CSSProperties;
    name_position?: PlayerShirtNamePosition
}

const Player: FC<PlayerProps> = ({
    id,
    shirt_number,
    shirt_name,
    yellow_card_count = 0,
    red_card_count = 0,
    is_subbed_out = false,
    is_subbed_in = false,
    goal = 0,
    style,
    name_position = PlayerShirtNamePosition.Bottom,
}) => {
    if (yellow_card_count > 1) {
        red_card_count = 1
    }

    if (yellow_card_count > 1) {
        yellow_card_count = 1
    }

    if (red_card_count > 1) {
        red_card_count = 1
    }

    let subbed_status = null
    if (is_subbed_out || is_subbed_in) {
        subbed_status = (
            <div className={styles.player__subbed} style={{padding: `${is_subbed_in === is_subbed_out ? 0.2 : 0.6}ch`}}>
                { is_subbed_in && <Arrow className={styles.player__subbed_in} /> }
                { is_subbed_out && <Arrow className={styles.player__subbed_out} /> }
            </div>
        )
    }

    return (
        <div key={`player-${id}`} style={style} className={[styles.player, name_position === PlayerShirtNamePosition.Right ? styles.player__right : styles.player__bottom].join(" ")}>
            <div className={styles.player__number}>
                <span>{shirt_number}</span>
                { yellow_card_count > 0 ? <div className={styles.player__yellow_card} style={{marginLeft: `2.7ch`, marginBottom: `3.5ch`}} /> : null }
                { red_card_count > 0 ? <div className={styles.player__red_card} style={{marginLeft: `${2.7 + (yellow_card_count + red_card_count - 1)}ch`, marginBottom: `${3.5 - (yellow_card_count + red_card_count - 1)}ch`}} /> : null }
                { subbed_status }
                { goal !== undefined && goal > 0 ? <SoccerBall className={styles.player__soccer_ball} /> : null }
                { goal !== undefined && goal > 0 ? (<div className={styles.player__goal}>{goal}</div>) : null }
            </div>
            <div className={[styles.player__name, name_position === PlayerShirtNamePosition.Right ? styles.player__name__right : null].join(" ")}>
                <p>{shirt_name}</p>
            </div>
        </div>
    )
}

export default Player
export {PlayerShirtNamePosition}