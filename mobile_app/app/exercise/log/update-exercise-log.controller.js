import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'

//@desc Update exercise logTime
//@route PUT /api/exercise/log/time/:id
//@access Private

export const updateExerciseLogTime = asyncHandler(async (req, res) => {
	const { weight, repeat, isCompleted } = req.body
	try {
		const exerciseLogTime = await prisma.exerciseTime.update({
			where: {
				id: +req.params.id
			},
			data: {
				weight,
				repeat,
				isCompleted
			}
		})
		res.json(exerciseLogTime)
	} catch (err) {
		res.status(404)
		throw new Error('Exercise log time not found')
	}
})

//@desc Update status of completed exercise log
//@route PATH /api/exercise/log/complete/:id
//@access Private

export const completeExerciseLog = asyncHandler(async (req, res) => {
	const { isCompleted } = req.body
	try {
		const exerciseLog = await prisma.exerciseTime.update({
			where: {
				id: +req.params.id
			},
			data: {
				isCompleted: true
			}
		})
		res.json(exerciseLog)
	} catch (err) {
		res.status(404)
		throw new Error('Exercise log not found')
	}
})
