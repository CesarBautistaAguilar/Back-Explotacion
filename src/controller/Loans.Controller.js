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
  
export const loansController = {
    getLoanMambu,
    createLoan,
    updateLoan
}
  
export default null
