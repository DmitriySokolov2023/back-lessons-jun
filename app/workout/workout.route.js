import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import {
	addWorkout,
	deleteWorkout,
	getAllWorkout,
	getWorkout,
	updateWorkout
} from './workout.controller.js'

const router = express.Router()

router.route('/workouts').post(protect, addWorkout)
router.route('/workouts/:id').get(protect, getWorkout)
router.route('/workouts').get(protect, getAllWorkout)
router.route('/workouts/:id').put(protect, updateWorkout)
router.route('/workouts/:id').delete(protect, deleteWorkout)

export default router
