import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'

//@desc Update workout log
//@desc PATCH /api/workouts/log/completed
//@access Private
export const updateCompleteWorkoutLog = asyncHandler(async (req, res) => {
	const logId = +req.params.id
	try {
		const workoutLogTime = await prisma.workoutLog.update({
			where: {
				id: logId
			},
			data: {
				isCompleted: true
			}
		})
		res.json(workoutLog)
	} catch (error) {
		res.status(404)
		throw new Error('Workout log not found!')
	}
})
