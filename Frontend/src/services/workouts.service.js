export const workoutsService = () => {
    return axios.create({
        baseURL: 'http://localhost:3001/api/workouts'
    })
}