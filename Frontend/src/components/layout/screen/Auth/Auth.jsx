import { useEffect, useState } from 'react'
import Layout from '../../Layout'
import { useForm } from 'react-hook-form'
import Button from '../../../UI/Button/Button'
import Field from '../../../UI/field/Field'
import Loader from '../../../UI/Loader'
import styles from './Auth.module.scss'
import { useAuthPage } from '../../../../hooks/useAuthPage'

const Auth = () => {
	const { register, handleSubmit, errors, isLoading, onSubmit, setType } =
		useAuthPage()

	return (
		<Layout
			heading="Пожалуйста авторизируйтесь"
			bgImage={'../../../../../public/authbg.jpeg'}
		>
			<div className="wrapper_inner_page">
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name="email"
						register={register}
						options={{ required: 'Такой email не существует' }}
						type="text"
						placeholder="Введите ваш Email"
					/>
					<Field
						error={errors?.password?.message}
						name="password"
						register={register}
						options={{ required: 'Неверный пароль' }}
						type="password"
						placeholder="Введите ваш пароль"
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('reg')}>
							Зарегистрироваться
						</Button>
						<Button clickHandler={() => setType('login')}>Войти</Button>
					</div>
				</form>
			</div>
		</Layout>
	)
}
export default Auth
