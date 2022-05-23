import { productService } from '../service/Clients.Service'

const getClientMambu = async (req, res) => {
    console.log('Controller starting method getClientMambu')
    const { clientId } = req.params
    console.log(`clientId: ${JSON.stringify(clientId)}`)
    const result = await productService.getClientMambu(clientId)
    console.log('Controller ending method getClientMambu')
    res.json(result)
}

const createClient = async (req, res) => {
    console.log('Controller starting method createClient')
    const { body } = req
    console.log(`Body to petition: ${JSON.stringify(body)}`)
    const { result, status } = await productService.createClient(body)
    console.log('Controller ending method createClient')
    res.status(status)
    res.json(result)
}

const validationClient = async (req, res) => {
    console.log('Controller starting method validationClient')
    const { id } = req.params
    console.log(`clientId: ${JSON.stringify(id)}`)
    const result = await productService.validationClient(id)
    console.log('Controller ending method validationClient')
    res.json(result)
}

const updateClient = async (req, res) => {
    console.log('Controller starting method updateClient')
    const { body } = req
    console.log(`Body to petition: ${JSON.stringify(body)}`)
    const { result, status } = await productService.updateClient(body)
    console.log('Controller ending method updateClient')
    res.status(status)
    res.json(result)
}
  
export const clientsController = {
    getClientMambu,
    createClient,
    validationClient,
    updateClient
}
  
export default null
  