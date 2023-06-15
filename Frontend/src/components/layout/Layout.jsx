import { useCheckToken } from '../../hooks/useCheckToken'
import Header from './header/Header'
import styles from './Layout.module.scss'
import cn from 'clsx'

const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
	useCheckToken()
	return (
		<section
			className={cn(styles.wrapper, {
				[styles.wrapper_otherPage]: !!heading
			})}
			style={{ backgroundImage: `url('${bgImage}')` }}
		>
			<Header backLink="/" />

			{heading && <h1 className={styles.heading}>{heading}</h1>}

			{children && <div>{children}</div>}
		</section>
	)
}

export default Layout
