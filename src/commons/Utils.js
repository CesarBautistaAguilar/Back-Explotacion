import Constans from '../commons/Constans'

const headers = {
    accept: 'application/vnd.mambu.v2+json',
    'content-type': 'application/json',
    Authorization: `Basic ${Constans.AUTH}`
  }

const catalogProducts = (property) => {
    const result = {
        encodedKey: property.encodedKey, 
        name: property.name, 
        notes: property.notes, 
        loanAmount: property.loanAmountSettings.loanAmount,
        numInstallments: property.scheduleSettings.numInstallments,
        interestRate: property.interestSettings.indexRateSettings.interestRate,
        creditArrangementSettings: property.creditArrangementSettings.creditArrangementRequirement,
        amortizationMethod: property.paymentSettings.amortizationMethod,
        fees: feesInformation(property.feesSettings.fees)
    }
    return result
}

const bodyClient = property => {
    const result = {
        id: property.id,
        firstName: property.firstName,
        lastName: property.lastName,
        preferredLanguage: 'SPANISH',
        assignedBranchKey: '8a44b1847f4efa4a017f4fc87a6d02f3'
    }
    console.log(`Body client: ${JSON.stringify(result)}`)
    return result
}

const updateClient = property => {
    const result = []
    const keys = ['firstName', 'lastName']
    keys.forEach(key =>{
        result.push({
            op: 'REPLACE',
            path: key,
            value: property[key]
          })
    })
    return result
}

export const Utils = {
    headers,
    catalogProducts,
    bodyClient,
    updateClient
}

export default null
