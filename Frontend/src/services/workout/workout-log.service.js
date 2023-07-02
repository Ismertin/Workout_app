import { $axios } from '../../api'

import { WORKOUTS } from './workout.service.js'

const LOG = `${WORKOUTS}/log`

const WorkoutsLogService = {
	getById: async id => {
		return $axios.get(`${LOG}/${id}`)
	},

	create: async workoutId => {
		return $axios.post(`${LOG}/${workoutId}`)
	},

	complete: async id => {
		return $axios.patch(`${LOG}/complete/${id}`)
	}
}
export default WorkoutsLogService