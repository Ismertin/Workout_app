import cn from 'clsx'
import styles from './Alert.module.scss'

const Alert = ({type = 'error', text}) => {
	return (
		<div className={cn(styles.alert, style=[type])}>
			{text}
		</div>
	)
}

export default Alert