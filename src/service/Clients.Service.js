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
    let result = {}
    const bodyLoan = Utils.bodyClient(body)
    const sendMambu = await fetch(`${Constans.URL_MAMBU}/clients`,{
        method: 'POST',
        body: JSON.stringify(bodyLoan),
        headers: Utils.headers
      })
    const status = sendMambu.status
    if (sendMambu.ok) {
        const resultMambu = JSON.parse(JSON.stringify(await sendMambu.json()))
        console.log(`Response to Mambu: ${JSON.stringify(resultMambu)}`)
        const { id, encodedKey } = resultMambu
        result = await clientsDao.saveClients(id, encodedKey)
    }else {
        result = JSON.parse(JSON.stringify(await sendMambu.json()))
    }
    console.log(`Result: ${JSON.stringify(result)}`)
    console.log('Service ending method createClient')
    return { result, status }
}

const validationClient = async id => {
    console.log('Service starting method validationClient')
    let result = { exist: false }
    const response = await clientsDao.existsClients(id)
    if (response) result = { exist: true }
    console.log(`Result: ${JSON.stringify(result)}`)
    console.log('Service ending method validationClient')
    return result
}

export const productService = {
    getClientMambu,
    validationClient,
    createClient
}
  
export default null
