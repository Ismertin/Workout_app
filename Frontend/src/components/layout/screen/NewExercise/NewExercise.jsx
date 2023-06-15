import { useMutation } from '@tanstack/react-query'
import { ExerciseService } from '../../../../services/exercise/exercise.service.js'
import Layout from '../../Layout.jsx'
import { useForm } from 'react-hook-form'
import Loader from '../../../UI/Loader.jsx'
import Field from '../../../UI/field/Field.jsx'
import styles from '../Auth/Auth.module.scss'
import Button from '../../../UI/Button/Button.jsx'

const NewExercise = () => {
    const {} = useMutation(['create exercise'], body => ExerciseService.create(body))
	const {
		register,
		handleSubmit,
		isLoading,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})
	const onSubmit = data => {
		mutate(data)
	}

	return (
		<>
	<Layout bgImage='public/new-exercise.jfif'
					heading='Создание нового упражнения'
					backLink='/new-workout' />
			<div className="wrapper_inner_page">
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name="name"
						register={register}
						options={{ required: 'Такое упражнение уже есть' }}
						type="text"
						placeholder="Название"
					/>
					<Field
						error={errors?.times?.message}
						name="times"
						register={register}
						options={{
							valueIsNumber: true,
							validate: (value) => value > 0,
							required: 'Это значение уже указано' }}
						placeholder="Количество"
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('reg')}>
							Зарегистрироваться
						</Button>
					</div>
				</form>
			</div>
	</>
		)
	}

export default NewExercise