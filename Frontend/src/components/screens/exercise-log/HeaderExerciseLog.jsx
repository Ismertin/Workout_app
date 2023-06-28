import stylesLayout from '../../layout/Layout.module.scss'
import cn from 'clsx'
import Header from '../../layout/header/Header.jsx'
import Loader from '../../ui/Loader.jsx'

const HeaderExerciseLog = ({exerciseItem , isSuccess}) => {
	return (
		<div className={cn(stylesLayout.wrapper, stylesLayout.otherPage)} style={{backgroundImage: `url('/images/ex-bg-2.jpg')`, height: "356"}}>
		<Header />
			{isSuccess ? <Loader />  :

			}


		</div>

	)
}

export default HeaderExerciseLog