import { useState } from 'react'
import styles from './Counter.module.scss'

const Counter = () => {
	const [time, setTime] = useState(0)
	const times = () => setTime(time + 1)
	const [level, setLevel] = useState(0)
	const levels = () => setLevel(level + 1)
	const [up, setUp] = useState(0)
	const ups = () => setUp(up + 1)

	return (
		<div className={styles.wrapper}>
			<div className={styles.time}>
				<h2>Times : {time}</h2>
				<button onClick={times}>TimeUp</button>
			</div>
			<div className={styles.level}>
				<h2>Level: {level}</h2>
				<button onClick={levels}>levelUp</button>
			</div>
			<div className={styles.up}>
				<h2>Up: {up}</h2>
				<button onClick={ups}>Up+</button>
			</div>
		</div>
	)
}
export default Counter
