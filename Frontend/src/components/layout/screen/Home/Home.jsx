import { useState } from 'react'
import Layout from '../../Layout.jsx'
import { useNavigate } from 'react-router-dom'
import Button from '../../../UI/Button/Button.jsx'
import styles from './Home.module.scss'
import Statisics from '../Profile/statistics/Statisics.jsx'

function Home() {
	const navigate = useNavigate()
	return (
		<Layout bgImage={'/public/bg.jpeg'}>
			<Button
				clickHandler={() => navigate('/new-workout')}
			>
				Новая тренировка
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			{/**Couners */}
			<Statisics />
		</Layout>
	)
}

export default Home
