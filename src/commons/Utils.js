import Constans from '../commons/Constans'

const headers = {
    accept: 'application/vnd.mambu.v2+json',
    'content-type': 'application/json',
    Authorization: `Basic ${Constans.AUTH}`
  }

const typeToday = (field) => {
    return {
        'sortingCriteria': {
            'field': 'id',
            'order': 'ASC'
        },
        'filterCriteria': [
            {
                'field': field,
                'operator': 'TODAY'
            }
        ]
    }
}

const typeTodayandField = (field, search) => {
    return {
        'sortingCriteria': {
            field,
            'order': 'ASC'
        },
        'filterCriteria': [
            {
                field,
                'operator': 'TODAY'
            },
            {
                'field': search.field,
                'operator': "EQUALS",
                'value': search.value
            }
        ]
    }
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
