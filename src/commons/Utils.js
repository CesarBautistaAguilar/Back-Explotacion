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
        amortizationMethod: property.paymentSettings.amortizationMethod
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

const updateLoan = property => {
    const result = []
    const keys = Object.keys(property)
    keys.forEach(key =>{
        result.push({
            op: 'REPLACE',
            path: key,
            value: property[key]
          })
    })
    return result
}

const segmentationSchema = installments => {
    const result = []
    installments.forEach(installment =>{
        const { interest, fee, penalty } = installment
        let output = installment
        output['interest'] = {
            amount: {
                expected: parseFloat((interest.amount.expected - interest.tax.expected).toFixed(2)),
                paid: parseFloat((interest.amount.paid - interest.tax.paid).toFixed(2)),
                due: parseFloat((interest.amount.due - interest.tax.due).toFixed(2))
            },
            tax: {
                expected: interest.tax.expected,
                paid: interest.tax.paid,
                due: interest.tax.due
            }
        }
        output['fee'] = {
            amount: {
                expected: parseFloat((fee.amount.expected - fee.tax.expected).toFixed(2)),
                paid: parseFloat((fee.amount.paid - fee.tax.paid).toFixed(2)),
                due: parseFloat((fee.amount.due - fee.tax.due).toFixed(2))
            },
            tax: {
                expected: fee.tax.expected,
                paid: fee.tax.paid,
                due: fee.tax.due
            }
        }
        output['penalty'] = {
            amount: {
                expected: parseFloat((penalty.amount.expected - penalty.tax.expected).toFixed(2)),
                paid: parseFloat((penalty.amount.paid - penalty.tax.paid).toFixed(2)),
                due: parseFloat((penalty.amount.due - penalty.tax.due).toFixed(2))
            },
            tax: {
                expected: penalty.tax.expected,
                paid: penalty.tax.paid,
                due: penalty.tax.due
            }
        }
        result.push(output)
    })
    return result
}

export const Utils = {
    headers,
    catalogProducts,
    bodyClient,
    updateClient,
    updateLoan,
    segmentationSchema
}

export default null
