import { Request, NextFunction, Response } from 'express'

export default interface IMiddleware {
  handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void>
}
