import { Request, Response } from 'express'
import { catchAsync } from '@/utils/async'

const getUser = catchAsync(async (_req: Request, res: Response) => {
  res.json({}).status(200)
})

export default {
  getUser,
}
