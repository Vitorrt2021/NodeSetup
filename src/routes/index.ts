import express, { Router } from 'express'
import usersController from '@/controllers/users'

const router: Router = express.Router()

router.route('/users').get(usersController.getUser)

export default router
