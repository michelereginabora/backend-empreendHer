import { Request, Response } from 'express'
import IRequestWithUser from './IRequestWithUser'

export default interface IController {
  handle(req: Request | IRequestWithUser, res: Response): Promise<Response>
}
