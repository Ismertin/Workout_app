import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useParams } from 'react-router-dom'

import { WorkoutService } from '../../../services/workout/workout.service.js'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header.jsx'

const Workouts = () => {
	const { id } = useParams()

	const {
		data: workout,
		isSuccess,
		isLoading
	} = useQuery(['get workout', id], () => WorkoutService.getById(id), {
		onSuccess: ({ data }) => data
	})

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{ backgroundImage: `url(${bgImage}})`, height: 356 }}
			>
				<Header backLink="/workouts" />

				{isSuccess && <time className={styles.time}>{data.minutes}</time>}
			</div>
		</>
	)
}

export default Workouts
