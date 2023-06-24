import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ExerciseService } from '../../../../services/exercise/exercise.service.js'
import Button from '../../../UI/Button/Button.jsx'
import Loader from '../../../UI/Loader.jsx'
import Alert from '../../../UI/alert/Alert.jsx'
import Field from '../../../UI/field/Field.jsx'
import Layout from '../../Layout.jsx'

import styles from './NewWorkout.module.scss'
import SelectExercises from './SelectExercises.jsx'
import useNewWorkout from './useNewWorkout.js'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewWorkout = () => {
	const {
		control,
		error,
		handleSubmit,
		isLoading,
		register,
		errors,
		onSubmit,
		isSuccess
	} = useNewWorkout()

	return (
		<>
			<Layout
				bgImage="public/new-workout.jpg"
				heading="Создание новой тренировки"
			/>
			<div className="wrapper_inner_page">
				{error && <Alert text="Workout created successfully" />}
				{isSuccess && (
					<Alert type="success" text="Тренировка создана успешно" />
				)}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name="name"
						register={control.register}
						options={{ required: 'Такая тренировка уже есть' }}
						type="text"
						placeholder="Название"
					/>

					<Link to="/new-exercise" className="dark-link">
						Добавить новое упражнение
					</Link>

					<SelectExercises control={control} />

					{errors?.iconPath && (
						<div className="error">{errors.iconPath.message}</div>
					)}

					<Button>Создать</Button>
				</form>
			</div>
		</>
	)
}

export default NewExercise
