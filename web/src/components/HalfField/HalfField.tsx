import { FC } from "react";
import styles from "./HalfField.module.css";

const HalfField: FC = () => {
    return (
        <>
            <div className={styles.field}>
                <div className={[styles.centerjustify, styles.goalbox].join(" ")} />
                <div className={[styles.centerjustify, styles.penaltybox].join(" ")} />
                <div className={[styles.centerjustify, styles.halfcircle].join(" ")} />
            </div>
        </>
    )
}

export default HalfField