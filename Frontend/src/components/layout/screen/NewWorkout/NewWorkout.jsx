import { Link } from 'react-router-dom'

import Button from './../../../UI/Button/Button'
import Loader from './../../../UI/Loader'
import Alert from './../../../UI/alert/Alert'
import Field from './../../../UI/field/Field'
import Layout from './../../Layout'
import SelectExercises from './SelectExercises'
import { useNewWorkout } from './useNewWorkout'

const NewWorkout = () => {
	const {
		control,
		error,
		errors,
		handleSubmit,
		isLoading,
		isSuccess,
		onSubmit,
		register
	} = useNewWorkout()

	return (
		<>
			<Layout bgImage="/public/new-workout.jpg" heading="Create new workout" />
			<div className="wrapper-inner-page">
				{error && <Alert type="error" text={error} />}
				{isSuccess && <Alert text="Workout created successfully" />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name="name"
						register={register}
						options={{
							required: 'Name is required'
						}}
						type="text"
						placeholder="Enter name"
					/>

					<Link to="/new-exercise" className="dark-link">
						Add new exercise
					</Link>

					<SelectExercises control={control} />

					{errors?.iconPath && (
						<div className="error">{errors?.iconPath?.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
