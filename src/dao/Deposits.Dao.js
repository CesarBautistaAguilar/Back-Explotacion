import Mongoose from 'mongoose'
import { GenericSchema } from '../models/Generic.Model'

const Deposit = Mongoose.model('deposits', GenericSchema)

const saveDeposits = async process => {
  console.log('DAO starting method saveDeposits')
  const result = await Deposit.bulkWrite(process)
  console.log('DAO ending method saveDeposits')

  return result
}

const getDeposits = async () => {
  console.log('method getDeposits DAO started')
  const result = await Deposit.find({}).select('-_id')
  console.log('method getDeposits DAO ending')
  return result
}

export const DepositsDao = {
    saveDeposits,
    getDeposits
}

export default null