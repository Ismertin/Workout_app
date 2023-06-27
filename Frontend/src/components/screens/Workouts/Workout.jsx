import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useParams } from 'react-router-dom'

import { WorkoutService } from '../../../services/workout/workout.service.js'
import stylesLayout from '../../layout/Layout.module.scss'
import styles from './Workout.module.scss'
import Header from '../../layout/header/Header.jsx'

const Workout = () => {
	const { id } = useParams()

	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['get workout', id], () => WorkoutService.getById(id), {
		onSuccess: ({ data }) => data
	})

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{ backgroundImage: `url('/images/workout-bg.jpg')`, height: 356 }}
			>
				<Header backLink='/workouts' />

				{isSuccess && (
					<div>
						<time className={styles.time}>{workoutLog.minutes + 'min.'}</time>
						<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
					</div>
				)}
			</div>
			<div className='wrapper-inner-page' style={{ paddingLeft: 0, paddingRight: 0 }}>
				<div style={{ width: '90%', margin: '0, auto' }}>
					{/*{errorCompleted && <Alert type='error' text={errorCompleted} />}*/}
				</div>
			</div>
		</>
	)
}

export default Workout
