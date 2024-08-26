import { FC } from "react";
import styles from "./Field.module.css";

const Field: FC = () => {
    return (
        <>
            <div className={styles.field}>
                <div className={styles.halfline} />
                <div className={styles.centercircle} />
                <div className={styles.ballpoint} />
                <div className={[styles.goalbox, styles.topbox].join(" ")} />
                <div className={[styles.penaltybox, styles.topbox].join(" ")} />
                <div className={[styles.goalbox, styles.bottombox].join(" ")} />
                <div className={[styles.penaltybox, styles.bottombox].join(" ")} />
            </div>
        </>
    )
}

export default Field