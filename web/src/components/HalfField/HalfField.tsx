import { FC } from "react";
import styles from "./HalfField.module.css";

interface HalfFieldProps {
    formation: string;
}

const HalfField: FC<HalfFieldProps> = ({
    formation = ""
}) => {
    return (
        <>
            <div className={styles.half_field}>
                <div className={styles.half_field__formation}>{formation}</div>
                <div className={[styles.centerjustify, styles.half_field__goal_box].join(" ")} />
                <div className={[styles.centerjustify, styles.half_field__penalty_box].join(" ")} />
                <div className={[styles.centerjustify, styles.half_field__half_center_circle].join(" ")} />
            </div>
        </>
    )
}

export default HalfField