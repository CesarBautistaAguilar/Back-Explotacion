import { Utils } from '../commons/Utils'
import { loansDao } from '../dao/Loans.Dao'
import { consumeServices } from '../commons/ConsumeServices'

const getLoanMambu = async (loanId) => {
    console.log('Service starting method getLoanMambu')
    const sendMambu = await consumeServices.petitionRest(`loans/${loanId}?detailsLevel=FULL`, {}, 'GET')
    const result = await sendMambu.json()
    console.log(`Response: ${JSON.stringify(result)}`)
    console.log('Service ending method getLoanMambu')
    return result
}

const createLoan = async body => {
    console.log('Service starting method createLoan')
    const sendMambu = await consumeServices.petitionRest('loans', body, 'POST')
    const result = await sendMambu.json()
    const status = sendMambu.status
    if (sendMambu.ok) {
        const { id, encodedKey, loanName, accountState } = JSON.parse(JSON.stringify(result))
        const { loanAmount, productTypeKey, accountHolderKey } = body
        const bodyLoan = { 
            id, 
            loanName,
            loanAmount, 
            encodedKey_product: productTypeKey, 
            encodedKey_client: accountHolderKey,
            accountState
        }
        await loansDao.saveLoans(encodedKey, bodyLoan)
    }
    console.log(`Result: ${JSON.stringify(result)}`)
    console.log('Service ending method createLoan')
    return { result, status }
}

const updateLoan = async body => {
    console.log('Service starting method updateLoan')
    const { id } =  body
    delete body.id
    let result
    const bodyLoan = Utils.updateLoan(body)
    console.log(`bodyLoan: ${JSON.stringify(bodyLoan)}`)
    const sendMambu = await consumeServices.petitionRest(`loans/${id}`, bodyLoan, 'PATCH')
    const status = sendMambu.status
    if (sendMambu.ok) 
        result = await loansDao.updateLoans(id, body)
    else
      result = await sendMambu.json()
    console.log(`Result: ${JSON.stringify(result)}`)
    console.log('Service ending method updateLoan')
    return { result, status }
}

export const loanService = {
    getLoanMambu,
    createLoan,
    updateLoan
}
  
export default null
