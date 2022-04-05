import express from 'express'
import { HelloController } from '../controller/Health.Controller'
import { searchController } from '../controller/Search.Controller'

const router = express.Router()

router.get('/', HelloController.healthCheck)

router.route('/clients/modification-today').post(searchController.saveClient).get(searchController.getClient)
router.route('/loans/modification-today').post(searchController.saveLoans).get(searchController.getLoans)
router.route('/transactions/creation-today').post(searchController.saveTransactions).get(searchController.getTransactions)

module.exports = router
