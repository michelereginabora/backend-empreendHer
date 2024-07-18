import { Router } from 'express'

export default interface IBaseRoute {
  setup(): Router
}
