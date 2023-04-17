import { Router } from 'express'
import healthCheckController from './Products/ProductController/healthCheckController'
import productController from './Products/productController'
import userController from './users/user.controller'

const routes = Router()

routes.get('/health-check', healthCheckController.check)
routes.post('/users', userController.create)
routes.post('/products', productController.create)
routes.get('/products', productController.list)
routes.get('/products-stock', productController.stock)

// 17 - Estamos exportando a constante routes
export default routes