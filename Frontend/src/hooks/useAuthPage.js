import { useMutation } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'
import { useForm } from 'react-hook-form'
import AuthService from "../services/auth.service.js";

export const useAuthPage = () => {
	const [type, setType] = useState(`login`)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuth) {
			navigate(`/`)
		}
	}, [isAuth])

	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(email, password, type),
		{
			onSuccess: () => {
				setIsAuth(true)
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(() =>({
			setType, register, handleSubmit, errors, isLoading, onSubmit}),
		[errors, isLoading]
)
}
