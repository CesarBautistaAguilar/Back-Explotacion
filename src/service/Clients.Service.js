import { Utils } from '../commons/Utils'
import { clientsDao } from '../dao/Clients.Dao'
import { consumeServices } from '../commons/ConsumeServices'

const getClientMambu = async (clientId) => {
    console.log('Service starting method getClientMambu')
    const sendMambu = await consumeServices.petitionRest(`clients/${clientId}?detailsLevel=FULL`, {}, 'GET')
    const result = await sendMambu.json()
    console.log(`Response: ${JSON.stringify(result)}`)
    console.log('Service ending method getClientMambu')
    return result
}

const createClient = async body => {
    console.log('Service starting method createClient')
    const bodyLoan = Utils.bodyClient(body)
    const sendMambu = await consumeServices.petitionRest('clients', bodyLoan, 'POST')
    const result = await sendMambu.json()
    const status = sendMambu.status
    if (sendMambu.ok) {
        const { encodedKey } = JSON.parse(JSON.stringify(result))
        await clientsDao.saveClients(encodedKey, body)
    }
    console.log(`Result: ${JSON.stringify(result)}`)
    console.log('Service ending method createClient')
    return { result, status }
}

const validationClient = async id => {
    console.log('Service starting method validationClient')
    let result = { exist: false }
    const response = await clientsDao.existsClients(id)
    if (response.length === 1) result = { exist: true, encodedKey: response[0].encodedKey }
    console.log(`Result: ${JSON.stringify(result)}`)
    console.log('Service ending method validationClient')
    return result
}

const updateClient = async body => {
    console.log('Service starting method updateClient')
    const { id } =  body
    delete body.id
    let result
    const bodyLoan = Utils.updateClient(body)
    console.log(`bodyLoan: ${JSON.stringify(bodyLoan)}`)
    const sendMambu = await consumeServices.petitionRest(`clients/${id}`, bodyLoan, 'PATCH')
    const status = sendMambu.status
    if (sendMambu.ok) 
        result = await clientsDao.updateClients(id, body)
    else
      result = await sendMambu.json()
    console.log(`Result: ${JSON.stringify(result)}`)
    console.log('Service ending method updateClient')
    return { result, status }
}

export const productService = {
    getClientMambu,
    validationClient,
    createClient,
    updateClient
}
  
export default null
