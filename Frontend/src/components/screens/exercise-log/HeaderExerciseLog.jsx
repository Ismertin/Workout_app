import cn from 'clsx'
import styles from './ExerciseLog.module.scss'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header.jsx'

const HeaderExerciseLog = ({ exerciseLog, isSuccess }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{ backgroundImage: `url('/images/ex-bg-2.jpg')`, height: '356' }}
		>
			<Header backLink={isSuccess ? `/workout/${exerciseLog.workoutLog}` : '/workouts'} />
			{isSuccess && (
				<div className={styles.heading}><img
				src={import.meta.env.VITE_SERVER_URL + exerciseLog.exercise.iconPath}
				height='34'
				alt=''
				draggable={false}
				/>
				<h1 className={stylesLayout.heading}>{exerciseLog.exercise.name}</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderExerciseLog
