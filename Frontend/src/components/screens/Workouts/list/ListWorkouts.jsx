import Layout from '../../../layout/Layout.jsx'
import Loader from '../../../ui/Loader.jsx'
import Alert from '../../../ui/alert/Alert.jsx'
import styles from '../detail/Workout.module.scss'

import WorkoutItem from './WorkoutItem.jsx'
import { useWorkout } from './useWorkout.js'

const ListWorkouts = () => {
	const { data, error, isSuccessMutate, isLoading, isSuccess, mutate } =
		useWorkout()

	return (
		<>
			<Layout bgImage="/images/workout-bg.jpg" heading="Workouts list" />

			<div
				className="wrapper-inner-page"
				style={{ paddingLeft: '0', paddingRight: '0' }}
			>
				{error && <Alert type="error" text={error} />}
				{isSuccessMutate && <Alert text="Workout log created successfully" />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map(workout => (
							<WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
						))}
						console.log(data)
					</div>
				)}
				{isSuccess && data?.length === 0 && (
					<Alert type="warning" text="No workouts found" />
				)}
			</div>
		</>
	)
}

export default ListWorkouts
