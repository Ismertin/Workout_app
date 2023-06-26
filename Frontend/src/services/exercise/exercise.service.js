import { $axios } from '../../api'

const EXERCISES = '/exercises'

export const ExerciseService = {
	getAll: async () => {
		return $axios.get(EXERCISES)
	},

	create: async body => {
		return $axios.post(EXERCISES, body)
	},

	update: async (id, body) => {
		return $axios.put(`${EXERCISES}/${id}`, body)
	},

	delete: async id => {
		return $axios.delete(`${EXERCISES}/${id}`)
	}
}

export default ExerciseService
