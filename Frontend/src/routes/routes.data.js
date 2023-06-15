import Auth from '../components/layout/screen/Auth/Auth.jsx'
import Home from '../components/layout/screen/Home/Home.jsx'
import NewWorkout from '../components/layout/screen/NewWorkout/NewWorkout.jsx'
import Profile from '../components/layout/screen/Profile/Profile.jsx'
import NewExercise from "../components/layout/screen/NewExercise/NewExercise.jsx";

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: true
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/new-exercise',
        component: NewExercise,
        isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	}
]
