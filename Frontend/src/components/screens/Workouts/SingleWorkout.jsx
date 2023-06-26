import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

const SingleWorkouts = () => {
	const { id } = useParams()

	const {} = useQuery(['get workout', id])

	return <div>Workouts</div>
}

export default SingleWorkouts
