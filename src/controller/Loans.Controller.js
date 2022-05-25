import { loanService } from '../service/Loans.Service'

const getLoanMambu = async (req, res) => {
    console.log('=========================================================')
    console.log('Controller starting method getLoanMambu')
    const { loanId } = req.params
    console.log(`loanId: ${JSON.stringify(loanId)}`)
    const result = await loanService.getLoanMambu(loanId)
    console.log('Controller ending method getLoanMambu')
    res.json(result)
}

const createLoan = async (req, res) => {
    console.log('=========================================================')
    console.log('Controller starting method createLoan')
    const { body } = req
    console.log(`Body to petition: ${JSON.stringify(body)}`)
    const { result, status } = await loanService.createLoan(body)
    console.log('Controller ending method createLoan')
    res.status(status)
    res.json(result)
}

const updateLoan = async (req, res) => {
    console.log('=========================================================')
    console.log('Controller starting method updateLoan')
    const { body } = req
    console.log(`Body to petition: ${JSON.stringify(body)}`)
    const { result, status } = await loanService.updateLoan(body)
    console.log('Controller ending method updateLoan')
    res.status(status)
    res.json(result)
}

const getLoan = async (req, res) => {
    console.log('=========================================================')
    console.log('Controller starting method getLoan')
    const query = req.query
    console.log(`Query params: ${JSON.stringify(query)}`)
    const result = await loanService.getLoan(query)
    console.log('Controller ending method getLoan')
    res.json(result)
}

const getSchemaLoan = async (req, res) => {
    console.log('=========================================================')
    console.log('Controller starting method getSchemaLoan')
    const { loanId } = req.params
    console.log(`loanId: ${JSON.stringify(loanId)}`)
    const result = await loanService.getSchemaMambu(loanId)
    console.log('Controller ending method getSchemaLoan')
    res.json(result)
}

export const loansController = {
    getLoanMambu,
    createLoan,
    updateLoan,
    getLoan,
    getSchemaLoan
}
  
export default null
