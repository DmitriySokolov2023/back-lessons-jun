import express from 'express'

import { authUser, registerUser } from './auth.controller.js'

const router = express.Router()

router.route('/auth/login').post(authUser)
router.route('/auth/register').post(registerUser)

export default router
