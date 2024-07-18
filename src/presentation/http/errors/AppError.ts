interface IMessage {
  description: string
  status?: string
}

class AppError {
  public readonly message: IMessage

  public readonly statusCode: number

  constructor(message: IMessage, statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
  }
}

export default AppError
