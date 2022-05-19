import { productService } from '../service/Product.Service'

const healthCheck = async (req, res) => {
    console.log('method healthCheck Controller started')
    const result = { message: 'healthCheck product is correcto'}
    console.log(`result => ${JSON.stringify(result)}`)
    console.log('method healthCheck Controller ending')
    res.json(result)
}

const getAllProduct = async (req,res) => {
    console.log('method getAllProduct Controller started')
    const result = await productService.getAllProduct()
    console.log('method getAllProduct Controller ending')
    res.json(result)
}

export const ProductController = {
    healthCheck,
    getAllProduct
}
  
  export default null
  