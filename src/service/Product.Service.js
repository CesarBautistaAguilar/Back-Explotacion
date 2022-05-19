import fetch from 'node-fetch'
import Constans from '../commons/Constans'
import { Utils } from '../commons/Utils'

const getAllProduct = async () => {
    console.log('method getAllProduct Service started')
    const resultData = []
    const response = await fetch(`${Constans.URL_MAMBU}/loanproducts/?detailsLevel=FULL`,{
        method: 'GET',
        headers: Utils.headers
      })
    const process = JSON.parse(JSON.stringify(await response.json()))
    process.forEach(property => {
        if(property.state === "ACTIVE")    resultData.push(Utils.catalogProducts(property))
      })
    console.log('lenght to response',process.length)
    console.log('lenght to filter',resultData.length)
    console.log('method getAllProduct Service ending')
    return resultData
}

export const productService = {
    getAllProduct
  }
  
  export default null