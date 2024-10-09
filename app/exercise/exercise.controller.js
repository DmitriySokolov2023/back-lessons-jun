import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'

export const addExercise = asyncHandler(async (req, res) => {
	const { name, times, image } = req.body
	const exercise = await prisma.exercise.create({
		data: {
			name,
			image,
			times
		}
	})

	res.json(exercise)
})

export const getAllExercise = asyncHandler(async (req, res) => {
	const exercises = await prisma.exercise.findMany({
		orderBy: {
			createdAt: 'asc'
		}
	})

	res.json(exercises)
})

export const updateExercise = asyncHandler(async (req, res) => {
	const { name, times, image } = req.body
	try {
		const exercise = await prisma.exercise.update({
			where: {
				id: +req.params.id
			},
			data: {
				name,
				times,
				image
			}
		})

		res.json(exercise)
	} catch (e) {
		console.log(e)
	}
})
export const deleteExercise = asyncHandler(async (req, res) => {
	const exercise = await prisma.exercise.delete({
		where: {
			id: +req.params.id
		}
	})

	res.json(exercise)
})
