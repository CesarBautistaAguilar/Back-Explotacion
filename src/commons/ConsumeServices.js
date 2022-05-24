import fetch from 'node-fetch'
import Constans from './Constans'
import { Utils } from './Utils'

const petitionRest = async (url, payload, method) => {
    console.log('Commons starting method petitionRest')
    const urlComplete = `${Constans.URL_MAMBU}/${url}`
    console.log(`Petition to: ${urlComplete}`)
    let options = {
        headers: Utils.headers,
        body: JSON.stringify(payload),
        method
    }
    if (method === 'GET') delete options.body
    const result = await fetch(urlComplete,options)
    console.log(`Status response: ${result.status}`)
    console.log('Commons ending method petitionRest')
    return result
}

export const consumeServices = {
    petitionRest
}
  
export default null