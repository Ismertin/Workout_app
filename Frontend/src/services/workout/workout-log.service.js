import { $axios } from '../../api'

import { WORKOUTS } from './workout.service.js'

const LOG = `${WORKOUTS}/log`

export const WorkoutsLogService = {
	getById: async id => {
		return $axios.get(`${LOG}/${id}`)
	},

	create: async workoutId => {
		return $axios.post(`${LOF}/${workoutId}`)
	},

	complete: async id => {
		return $axios.patch(`${LOG}/complete/${id}`)
	}
}

export default WorkoutsLogService
