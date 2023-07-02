import React from 'react'
import HeaderExerciseLog from './HeaderExerciseLog.jsx'
import Loader from '../../ui/Loader.jsx'
import styles from './ExerciseLog.module.scss'
import cn from 'clsx'
import Alert from '../../ui/alert/Alert.jsx'
import { useExerciseLog } from './hooks/useExerciseLog.js'
import Table from './table/Table.jsx'

const ExerciseLog = () => {
	const { exerciseLog, isLoading, isSuccess } = useExerciseLog()
	return <>
		<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
		<div className='wrapper-inner-page' style={{ paddingLeft: '0', paddingRight: '0' }}>
			{/*<ExerciseError errors={[errorChange, errorComplete]} /> */}
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.wrapper}>
					<Table />
					{exerciseLog?.times.map((item, index) => (

					))}
				</div>
			)}
			{isSuccess && exerciseLog?.times?.length === 0 && (
				<Alert type='warning' text='Times not found' />
			)}
		</div>
	</>
}

export default ExerciseLog