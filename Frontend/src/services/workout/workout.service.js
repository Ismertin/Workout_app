import { $axios } from '../../api'

export const WORKOUTS = '/workouts'

export const WorkoutService = {
	getAll: async () => {
		return $axios.get(WORKOUTS)
	},

	getById: async id => {
		return $axios.get(`${WORKOUTS}/${id}`)
	},

	create: async body => {
		return $axios.post(WORKOUTS, body)
	},

	update: async (id, body) => {
		return $axios.put(`${WORKOUTS}/${id}`, body)
	},

	delete: async id => {
		return $axios.delete(`${WORKOUTS}/${id}`)
	}
}
