import fetch from 'node-fetch'
import Constans from '../commons/Constans'
import { Utils } from '../commons/Utils'
import { clientsDao } from '../dao/Clients.Dao'

const getClientMambu = async (clientId) => {
    console.log('Service starting method getClientMambu')
    const sendMambu = await fetch(`${Constans.URL_MAMBU}/clients/${clientId}?detailsLevel=FULL`,{
        method: 'GET',
        headers: Utils.headers
      })
    const result = await sendMambu.json()
    console.log(`Response: ${JSON.stringify(result)}`)
    console.log('Service ending method getClientMambu')
    return result
}

const createClient = async body => {
    console.log('Service starting method createClient')
    const bodyLoan = Utils.bodyClient(body)
    const sendMambu = await fetch(`${Constans.URL_MAMBU}/clients`,{
        method: 'POST',
        body: JSON.stringify(bodyLoan),
        headers: Utils.headers
      })
    const result = await sendMambu.json()
    const status = sendMambu.status
    if (sendMambu.ok) {
        const { id, encodedKey } = JSON.parse(JSON.stringify(result))
        await clientsDao.saveClients(id, encodedKey)
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
    const bodyLoan = Utils.bodyClient(body)
    const sendMambu = await fetch(`${Constans.URL_MAMBU}/clients/${body.id}`,{
        method: 'PUT',
        body: JSON.stringify(bodyLoan),
        headers: Utils.headers
      })
    const result = await sendMambu.json()
    const status = sendMambu.status
    if (sendMambu.ok) {
        const { id, encodedKey } = JSON.parse(JSON.stringify(result))
        await clientsDao.updateClients(id, encodedKey)
    }
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
