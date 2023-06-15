import { useProfile } from './useProfile.js';
import stylesLayout from '../../Layout.module.scss';
import styles from './Profile.module.scss';
import cn from 'clsx';
import Header from '../../header/Header.jsx';
import Loader from '../../../UI/Loader.jsx';
import Statisics from './statistics/Statisics.jsx'

const Profile = () => {
	const { data, isLoading } = useProfile();
	return (
		<div>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.wrapper_otherPage)}
				style={{ backgroundImage: `url('/public/profile.jpg')`, height: 400 }}
			>
				<Header />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img src='/public/user.svg' alt='Profile' height='72' color='#ff' draggable={false} />
							<h1 className={stylesLayout.heading}>{data?.email}</h1>
						</>
					)}

				<Statisics />
				</div>
			</div>
		</div>
	);
};

export default Profile;
