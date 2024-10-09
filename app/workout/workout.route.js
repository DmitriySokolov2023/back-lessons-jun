import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import {
	addWorkout,
	deleteWorkout,
	getAllWorkout,
	updateWorkout
} from './workout.controller.js'

const router = express.Router()

router.route('/workout').post(protect, addWorkout)
router.route('/workout').get(protect, getAllWorkout)
router.route('/workout/:id').put(protect, updateWorkout)
router.route('/workout/:id').delete(protect, deleteWorkout)

export default router
