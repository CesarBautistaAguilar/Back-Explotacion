import Constans from '../commons/Constans'

const headers = {
    accept: 'application/vnd.mambu.v2+json',
    'content-type': 'application/json',
    Authorization: `Basic ${Constans.AUTH}`
  }

const typeToday = (field) => {
    return {
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

export const Utils = {
    typeToday,
    typeTodayandField,
    headers,
    createUpertBulkID,
    createUpertBulkEntryID
}

export default null
