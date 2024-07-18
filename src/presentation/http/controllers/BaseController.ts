import { Response } from 'express'

export default class BaseController {
  success(res: Response, message: string, data: any, status = 200) {
    return res.status(status).json({ success: true, message, data })
  }

  error(res: Response, details: string, status = 400) {
    return res.status(status).json({
      success: false,
      error: 'It was not possible complete the requisition. There is an erro in core application.',
      details,
    })
  }
}
