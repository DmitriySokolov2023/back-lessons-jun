import { faker } from '@faker-js/faker'
import * as argon2 from 'argon2'
import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'
import { UserFields } from '../utils/user.utils.js'

import { generateToken } from './generate-token.js'

export const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body
	const user = await prisma.user.findUnique({
		where: {
			email
		}
	})
	const isLogin = await argon2.verify(user.password, password)
	if (user && isLogin) {
		const token = generateToken(user.id)
		res.json({ user, token })
	} else {
		res.status(401)
		throw new Error('Email or password are not correct')
	}
})

export const registerUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const isHaveUser = await prisma.user.findUnique({
		where: {
			email
		}
	})

	if (isHaveUser) {
		res.status(400)
		throw new Error('User already exists')
	}

	const user = await prisma.user.create({
		data: {
			name: faker.name.fullName(),
			email,
			password: await argon2.hash(password)
		},
		select: UserFields
	})

	const token = generateToken(user.id)
	res.json({ user, token })
})
