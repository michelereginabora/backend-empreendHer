import AppError from '../errors/AppError'
import { Request, Response, NextFunction } from 'express'

export default async function globalHandlingErrors(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      code: error.message.status || 'error',
      message: error.message.description,
    })
  }

  console.error('Internal server error:', error)

  return res.status(500).json({
    code: 'error',
    message: 'Internal server error.',
  })
}
