import Mongoose from 'mongoose'
import { GenericSchema } from '../models/Generic.Model'

const Loans = Mongoose.model('loans', GenericSchema)

const saveLoans = async process => {
  console.log('DAO starting method saveLoans')
  const result = await Loans.bulkWrite(process)
  console.log('DAO ending method saveLoans')
  return result
}

const getLoans = async () => {
  console.log('method getLoans DAO started')
  const result = await Loans.find({}).select('-_id')
  console.log('method getLoans DAO ending')
  return result
}

export const loansDao = {
    saveLoans,
    getLoans
}

export default null
