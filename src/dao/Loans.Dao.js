import Mongoose from 'mongoose'
import Moment from 'moment'
import { GenericSchema } from '../models/Generic.Model'

const loans = Mongoose.model('loans', GenericSchema)

const saveLoans = async (encodedKey, body) => {
    console.log('DAO starting method saveLoans')
    const newRegistry = {
        ...body,
        encodedKey
    }
    const result = await loans.create(newRegistry)
    console.log(`Result operation db: ${JSON.stringify(result)}`)
    console.log('DAO ending method saveLoans')
}

const updateLoans = async (id, body) => {
    console.log('DAO starting method updateLoans')
    const updateRegistry = {
        ...body,
        updatedAt: Moment(Moment.now(), 'x').toISOString()
    }
    const result = await loans.findOneAndUpdate({ id }, updateRegistry)
    console.log(`Result operation db: ${JSON.stringify(result)}`)
    console.log('DAO starting method updateLoans')
    return result
}

const existsClients = async id => {
    console.log('DAO starting method existsClients')
    const result = await clients.find({ id }).select('-_id')
    console.log(`Result: ${JSON.stringify(result)}`)
    console.log('DAO ending method existsClients')
    return result
}

export const loansDao = {
    saveLoans,
    updateLoans
}

export default null
