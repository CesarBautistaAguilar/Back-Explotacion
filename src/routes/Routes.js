import express from 'express'
import { HelloController } from '../controller/Health.Controller'
import { ProductController } from '../controller/Producto.Controller'
import { clientsController } from '../controller/Clients.Controller'

const router = express.Router()

router.get('/', HelloController.healthCheck)
router.route('/client').post(clientsController.createClient)
router.route('/client-mambu/:clientId').get(clientsController.getClientMambu)
router.route('/client-validation/:id').get(clientsController.validationClient)
router.route('/product').post(ProductController.healthCheck)
router.route('/product/search').get(ProductController.getAllProduct)

module.exports = router
