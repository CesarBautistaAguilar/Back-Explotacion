import express from 'express'
import { HelloController } from '../controller/Health.Controller'
import { ProductController } from '../controller/Producto.Controller'
import { clientsController } from '../controller/Clients.Controller'
import { loansController } from '../controller/Loans.Controller'

const router = express.Router()

router.get('/', HelloController.healthCheck)
router.route('/client')
    .get(clientsController.getClient)
    .post(clientsController.createClient)
    .put(clientsController.updateClient)
router.route('/client-mambu/:clientId').get(clientsController.getClientMambu)
router.route('/client-validation/:id').get(clientsController.validationClient)
router.route('/loan')
    .post(loansController.createLoan)
    .put(loansController.updateLoan)
router.route('/loan-mambu/:loanId').get(loansController.getLoanMambu)
router.route('/product').post(ProductController.healthCheck)
router.route('/product/search').get(ProductController.getAllProduct)

module.exports = router
