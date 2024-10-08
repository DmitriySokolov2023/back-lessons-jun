import 'colors'
import 'dotenv/config'
import express from 'express'
import authRoutes from './app/auth/auth.routes.js'

const app = express()

async function main() {
	// if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
	app.use(express.json())
	app.use('/api', authRoutes)

	const PORT = process.env.PORT

	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green
				.bold
		)
	)
}

main()
