import express, { Express } from 'express'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import routes from '@/routes'

const app: Express = express()

app.use(helmet())
app.use(cors())
app.options('*', cors())
app.use(express.urlencoded({ extended: true }))
app.use(compression())

app.use('/', routes)

export default app
