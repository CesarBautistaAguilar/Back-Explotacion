import Mongoose from 'mongoose'
import { GenericSchema } from '../models/Generic.Model'

const clients = Mongoose.model('clients', GenericSchema)

const saveClients = async (id, encodedKey) => {
    console.log('DAO starting method saveClients')
    const newRegistry = {
        id, 
        encodedKey
    }
    const result = await clients.create(newRegistry)
    console.log(`Result operation db: ${result}`)
    console.log('DAO ending method saveClients')
    return result
}

const getClients = async (clientId) => {
    console.log('DAO starting method getClients')
    const querySearch = { idFMP: clientId}
    console.log(`Query search: ${querySearch}`)
    const result = await clients.find(querySearch).select('-_id')
    console.log(`Result: ${JSON.stringify(result)}`)
    console.log('DAO starting method getClients')
    return result
}

const existsClients = async id => {
    console.log('DAO starting method existsClients')
    const result = await clients.exists({ id })
    console.log(`Result: ${JSON.stringify(result)}`)
    console.log('DAO ending method existsClients')
    return result
}

export const clientsDao = {
    getClients,
    saveClients,
    existsClients
}

export default null
