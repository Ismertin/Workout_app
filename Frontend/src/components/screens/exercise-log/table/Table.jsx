import React from 'react'
import styles from '../ExerciseLog.module.scss'

const Table = () => {
	return (
		<div className={styles.row}>
			<div>
				<span>Previous</span>
			</div>
			<div>
				<span>Repeat & Weight</span>
			</div>
			<div>
				<span>Completed</span>
			</div>
		</div>
	)
}

export default Table