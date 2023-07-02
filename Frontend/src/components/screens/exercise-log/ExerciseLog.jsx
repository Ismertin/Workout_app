import React from 'react'
import HeaderExerciseLog from './HeaderExerciseLog.jsx'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import exerciseLogService from '../../../services/exercise/exercise-log.service.js'
import Loader from '../../ui/Loader.jsx'
import styles from './ExerciseLog.module.scss'
import cn from 'clsx'
import Alert from '../../ui/alert/Alert.jsx'

const ExerciseLog = () => {
	const { id } = useParams()
	const {
		data: exerciseLog,
		isSuccess,
		refetch,
		isLoading
	} = useQuery(['get exercise log', id], () => exerciseLogService.getById(id), {
		select: ({ data }) => data
	})
	return <>
		<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
		<div className='wrapper-inner-page' style={{ paddingLeft: '0', paddingRight: '0' }}>
			<div style={{ width: '90%', margin: '0 auto' }}>
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.wrapper}>
					<div className={styles.row}>
						<div>
							<span>Previous</span>
						</div>
						<div><span>Repeat & Weight</span></div>
						<div><span>Completed</span></div>
					</div>
					{exerciseLog.times.map((item, index) => (
						<div className={cn(styles.row, {
							[styles.completed]: item.isCompleted
						})}
								 key={`time ${index}`}>
							<div className={styles.opacity} key={`Prev${index}/${item.prevWeight}`}>
								<input type='number' defaultValue={item.prevWeight} disabled />
								<i>kg{item.isCompleted && ' '}/</i>
								<input type='number' defaultValue={item.prevRepeat} disabled />
								<div key={`RepeatWeight ${index}/${item.weight}`}>
									<input type='tel' pattern='[0-9]*'
												 defaultValue={item.weight} disabled={item.isCompleted} />
									<i>kg{item.isCompleted && ' '}/</i>
									<input type='number' defaultValue={item.repeat} disabled={item.isCompleted} />
								</div>
								<div key={`Completed ${index}/${item.isCompleted}`}>
									<img src={item.isCompleted ? '/images/exercises/check-completed.svg' : '/images/exercises/check.svg'}
											 className={styles.checkbox} alt=''
											 onClick={() => changeState({
												 timeIndex: index, key: 'isCompleted', value: !item.isCompleted
											 })} />

								</div>
							</div>
						</div>
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