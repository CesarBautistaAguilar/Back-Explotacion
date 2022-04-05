import Mongoose from 'mongoose'
import { GenericSchema } from '../models/Generic.Model'

const Client = Mongoose.model('clients', GenericSchema)

const saveClient = async process => {
  console.log('DAO starting method saveClient')
  const result = await Client.bulkWrite(process)
  console.log('DAO ending method saveClient')

  return result
}

const getClient = async () => {
  console.log('method getClient DAO started')
  const result = await Client.find({}).select('-_id')
  console.log('method getClient DAO ending')
  return result
}

export const ClientsDao = {
  saveClient,
  getClient
}

export default null
