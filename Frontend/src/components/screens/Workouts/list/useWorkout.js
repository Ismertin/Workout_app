import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import WorkoutLogService from '../../../../services/workout/workout-log.service.js'
import { WorkoutService } from '../../../../services/workout/workout.service.js'

export const useWorkout = () => {
	const { data, isSuccess } = useQuery(
		['get workouts'],
		() => WorkoutService.getAll(),
		{
			refetchOnWindowFocus: false
		}
	)

	const navigate = useNavigate()

	const {
		mutate: createWorkoutLog,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(
		['Create new workout log'],
		workoutId => WorkoutLogService.create(workoutId),
		{
			onSuccess(data) {
				navigate(`/workout/${data.id}`)
			}
		}
	)

	return {
		data,
		isLoading,
		isSuccess,
		isSuccessMutate,
		createWorkoutLog
	}
}
