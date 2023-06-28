import cn from 'clsx'

import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header.jsx'

const HeaderExerciseLog = ({ exercise, isSuccess }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{ backgroundImage: `url('/images/ex-bg-2.jpg')`, height: '356' }}
		>
			<Header backLink={'/workout'} />
		</div>
	)
}

export default HeaderExerciseLog
