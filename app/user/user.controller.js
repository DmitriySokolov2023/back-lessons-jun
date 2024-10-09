// import { faker } from '@faker-js/faker'
// import * as argon2 from 'argon2'
// import { UserFields } from '../utils/user.utils.js'
// import { generateToken } from './generate-token.js'
import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'
import { UserFields } from '../utils/user.utils.js'

export const getUserProfile = asyncHandler(async (req, res) => {
	const user = await prisma.user.findUnique({
		where: {
			id: req.user.id
		},
		select: UserFields
	})

	res.json(user)
})
