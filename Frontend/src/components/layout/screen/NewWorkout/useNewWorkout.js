import { useMemo } from 'react'

import WorkoutsService from '../../../../services/workouts/workout.service'

export const useNewWorkout = () => {
	const {
		register,
		reset,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, error, isLoading } = useMutation(
		['create exercise'],
		body => WorkoutsService.create(body),
		{
			onSuccess: () => {
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}
	return useMemo(
		() => ({}),
		[
			register,
			control,
			handleSubmit,
			errors,
			isSuccess,
			error,
			isLoading,
			onSubmit
		]
	)
}
