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

const getLoans = async search => {
    console.log('DAO starting method getLoans')
    const result = await loans.find(search)
    console.log('DAO ending method getLoans')
    return result
}

export const loansDao = {
    saveLoans,
    updateLoans,
    getLoans
}

export default null
