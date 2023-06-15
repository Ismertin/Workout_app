import asyncHandler from 'express-async-handler'

import { addPrevValue } from '../../exercise/log/add-prev-values.utils.js'
import { prisma } from '../../prisma.js'

//@desc Get workout log
//@route GET /api/workouts/log/:id
//@access Private
export const getWorkoutLog = asyncHandler(async (req, res) => {
	const workoutLog = await prisma.workoutLog.findUnique({
		where: {
			id: +req.params.id
		},
		include: {
			workout: {
				include: {
					exercises: true
				}
			},
			exerciseLogs: {
				orderBy: {
					id: 'asc'
				},
				include: {
					exercise: true
				}
			}
		}
	})
	if (!workoutLog) {
		res.status(404)
		throw new Error('workout log not found')
	}

	res.json({
		...workoutLog,
		minutes: calculateMinutes(workoutLog.workout.exercises.length)
	})
})
