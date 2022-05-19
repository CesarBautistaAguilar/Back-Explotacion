import Constans from '../commons/Constans'

const headers = {
    accept: 'application/vnd.mambu.v2+json',
    'content-type': 'application/json',
    Authorization: `Basic ${Constans.AUTH}`
  }

const typeTodayandField = (field, search) => {
    const process = {
        sortingCriteria: {
            field,
            order: 'ASC'
        },
        filterCriteria: [
            {
                field,
                operator: 'TODAY'
            }
        ]
    }
    if(Object.keys(search).length === 2) {
        process.filterCriteria.push({
            field: search.field,
            operator: 'EQUALS',
            value: search.value
        })
    }
    return process
}

const createUpertBulkID = (registrie) => {
    const result = {
        updateOne: {
            filter: { id: registrie.id},
            update: { $set: registrie },
            upsert: true
        }
    }
    return result
}

const createUpertBulkEntryID = (registrie) => {
    const result = {
        updateOne: {
            filter: { entryID: registrie.entryID},
            update: { $set: registrie },
            upsert: true
        }
    }
    return result
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

const feesInformation = (property) => {
    const result = []
    property.forEach(element => {
        result.push({
            encodedKey: element.encodedKey,
            id: element.id,
            name: element.name
        })
    })
    return result
}

export const Utils = {
    typeTodayandField,
    headers,
    createUpertBulkID,
    createUpertBulkEntryID,
    catalogProducts
}

export default null
