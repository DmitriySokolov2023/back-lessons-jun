import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'

export const addWorkout = asyncHandler(async (req, res) => {
	const { name, times, image } = req.body
	const workout = await prisma.workout.create({
		data: {
			name,
			image,
			times
		}
	})

	res.json(workout)
})

export const getAllWorkout = asyncHandler(async (req, res) => {
	const workouts = await prisma.workout.findMany({
		orderBy: {
			createdAt: 'asc'
		}
	})

	res.json(workouts)
})

export const updateWorkout = asyncHandler(async (req, res) => {
	const { name, times, image } = req.body
	try {
		const workout = await prisma.workout.update({
			where: {
				id: +req.params.id
			},
			data: {
				name,
				times,
				image
			}
		})

		res.json(workout)
	} catch (e) {
		console.log(e)
	}
})
export const deleteWorkout = asyncHandler(async (req, res) => {
	const workout = await prisma.workout.delete({
		where: {
			id: +req.params.id
		}
	})

	res.json(workout)
})
