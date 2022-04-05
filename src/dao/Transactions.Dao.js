import Mongoose from 'mongoose'
import { GenericSchema } from '../models/Generic.Model'

const Transactions = Mongoose.model('transactions', GenericSchema)

const saveTransactions = async process => {
  console.log('DAO starting method saveTransactions')
  const result = await Transactions.bulkWrite(process)
  console.log('DAO ending method saveTransactions')
  return result
}

const getTransactions = async () => {
  console.log('method getTransactions DAO started')
  const result = await Transactions.find({}).select('-_id')
  console.log('method getTransactions DAO ending')
  return result
}

export const TransactionsDao = {
    saveTransactions,
    getTransactions
}

export default null
