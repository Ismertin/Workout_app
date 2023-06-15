import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'

import { addPrevValue } from './add-prev-values.utils.js'

export const getExerciseLog = asyncHandler(async (req, res) => {
	const exerciseLog = await prisma.exerciseLog.findUnique({
		where: {
			id: +req.params.id
		},
		include: {
			exercise: true,
			times: {
				orderBy: {
					createdAt: 'asc'
				}
			}
		}
	})
	if (!exerciseLog) {
		res.status(404)
		throw new Error('Exercise log not found')
	}
	const prevExerciseLog = await prisma.exerciseLog.findFirst({
		where: {
			exerciseId: exerciseLog.exerciseId,
			userId: req.user.id,
			isCompleted: true
		},
		orderBy: {
			createdAt: 'asc'
		}
	})

	res.json({
		...exerciseLog,
		times: addPrevValue(exerciseLog, prevExerciseLog)
	})
})
