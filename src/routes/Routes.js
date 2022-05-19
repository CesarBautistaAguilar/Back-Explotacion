import express from 'express'
import { HelloController } from '../controller/Health.Controller'
import { searchController } from '../controller/Search.Controller'
import { ProductController } from '../controller/Producto.Controller'

const router = express.Router()

router.get('/', HelloController.healthCheck)

router.route('/clients/modification-today').post(searchController.saveClient).get(searchController.getClient)
router.route('/loans/modification-today').post(searchController.saveLoans).get(searchController.getLoans)
router.route('/transactions/creation-today').post(searchController.saveTransactions).get(searchController.getTransactions)
router.route('/gljournalentries/creation-today').post(searchController.saveGLjournalentries).get(searchController.getGLjournalentries)
router.route('/deposits/modification-today').post(searchController.saveDeposits).get(searchController.getDeposits)
router.route('/product').post(ProductController.healthCheck)
router.route('/product/search').get(ProductController.getAllProduct)

module.exports = router
