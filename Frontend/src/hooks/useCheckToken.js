import { useLocation } from 'react-router-dom'
import { useAuth } from './useAuth'
import { useEffect } from 'react'
import { TOKEN } from '../app.constants'
import Cookies from 'js-cookie'
TOKEN

export const useCheckToken = () => {
	const { pathname } = useLocation()
	const { setIsAuth, isAuth } = useAuth()

	useEffect(() => {
		const token = Cookies.get(TOKEN)
		if (!token) setIsAuth(false)
	}, [pathname, isAuth])
}
