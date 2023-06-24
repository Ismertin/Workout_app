import { $axios } from '../../api.js'

const WORKOUTS = '/workouts'

export const workoutsService = {
	async getAll() {
		return await $axios.get(WORKOUTS)
	},
	async getById() {
		return await $axios.get(`${WORKOUTS}/${id}`)
	},
	async create(body) {
		return await $axios.post(WORKOUTS, body)
	},
	async update(id, body) {
		return await $axios.put(`${WORKOUTS}/${id}`, body)
	},
	async delete(id) {
		return await $axios.delete(`${id}`)
	}
}
