import Mongoose from 'mongoose'
import Moment from 'moment'
import { GenericSchema } from '../models/Generic.Model'

const clients = Mongoose.model('clients', GenericSchema)

const saveClients = async (encodedKey, body) => {
    console.log('DAO starting method saveClients')
    const newRegistry = {
        ...body,
        encodedKey
    }
    const result = await clients.create(newRegistry)
    console.log(`Result operation db: ${JSON.stringify(result)}`)
    console.log('DAO ending method saveClients')
}

const updateClients = async (id, body) => {
    console.log('DAO starting method updateClients')
    const updateRegistry = {
        ...body,
        updatedAt: Moment(Moment.now(), 'x').toISOString()
    }
    const result = await clients.findOneAndUpdate({ id }, updateRegistry)
    console.log(`Result operation db: ${JSON.stringify(result)}`)
    console.log('DAO starting method updateClients')
    return result
}

const existsClients = async id => {
    console.log('DAO starting method existsClients')
    const result = await clients.find({ id }).select('-_id')
    console.log(`Result: ${JSON.stringify(result)}`)
    console.log('DAO ending method existsClients')
    return result
}

const getClients = async search => {
    console.log('DAO starting method getClients')
    const result = await clients.find(search)
    console.log(`Result: ${JSON.stringify(result)}`)
    console.log('DAO ending method getClients')
    return result
}

export const clientsDao = {
    saveClients,
    existsClients,
    updateClients,
    getClients
}

export default null
