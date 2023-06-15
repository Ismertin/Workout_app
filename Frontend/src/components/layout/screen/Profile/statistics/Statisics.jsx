import styles from "./Statistics.module.scss"
import {useProfile} from "../useProfile.js";

const Statistics = () => {

 const {data} = useProfile()

    return <div className={styles.wrapper}>
        {data?.statistics.map(statistic => (
            <>
            <div className={styles.heading}>{statistic.label}</div>
                <div className={styles.number}>{statistic.value}</div>
            </>
        ))}
    </div>
}
export default Statistics
