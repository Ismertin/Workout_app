import { $axios } from '../../api'

import { EXERCISES } from './exercise.service.js'

const LOG = `${EXERCISES}/log`

export const ExerciseLogService = {
	getById: async id => {
		return $axios.get(`${LOG}/${id}`)
	},

	create: async body => {
		return $axios.post(LOG, body)
	},

	updateTime: async (id, timeId, body) => {
		return $axios.put(`${LOG}/time/${id}/${timeId}`, body)
	},

	complete: async (id, body) => {
		return $axios.patch(`${LOG}/complete/${id}`, body)
	}
}

export default ExerciseLogService
