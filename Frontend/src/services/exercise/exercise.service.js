import { $axios } from '../../api.js'

const EXERCISES = '/exercises'

export const ExerciseService = {
	async getAll() {
		return await $axios.get(EXERCISES)
	},
	async create(body) {
		return await $axios.post(EXERCISES, body)
	},
	async update(id, body) {
    return await $axios.put(`${EXERCISES}/${id}`, body)
  },
	async delete(id) {
    return await $axios.delete(`${id}`)
}
}
