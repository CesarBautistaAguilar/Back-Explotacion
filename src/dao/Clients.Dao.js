import Mongoose from 'mongoose'
import Moment from 'moment'
import { GenericSchema } from '../models/Generic.Model'

const clients = Mongoose.model('clients', GenericSchema)

const saveClients = async (id, encodedKey) => {
    console.log('DAO starting method saveClients')
    const newRegistry = {
        id, 
        encodedKey
    }
    const result = await clients.create(newRegistry)
    console.log(`Result operation db: ${JSON.stringify(result)}`)
    console.log('DAO ending method saveClients')
}

const updateClients = async (id, encodedKey) => {
    console.log('DAO starting method updateClients')
    const updateRegistry = {
        id, 
        encodedKey,
        updatedAt: Moment(Moment.now(), 'x').toISOString()
    }
    const result = await clients.findOneAndUpdate({ id }, updateRegistry)
    console.log(`Result operation db: ${JSON.stringify(result)}`)
    console.log('DAO starting method updateClients')
}

const existsClients = async id => {
    console.log('DAO starting method existsClients')
    const result = await clients.find({ id }).select('-_id')
    console.log(`Result: ${JSON.stringify(result)}`)
    console.log('DAO ending method existsClients')
    return result
}

export const clientsDao = {
    saveClients,
    existsClients,
    updateClients
}

export default null
