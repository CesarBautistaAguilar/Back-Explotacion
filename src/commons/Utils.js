const headers = {
    accept: 'application/vnd.mambu.v2+json',
    'content-type': 'application/json',
    Authorization: ''
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

const createUpertBulk = (registrie) => {
    const result = {
        updateOne: {
            filter: { id: registrie.id},
            update: { $set: registrie },
            upsert: true
        }
    }
    return result
}

export const Utils = {
    typeToday,
    headers,
    createUpertBulk
}

export default null
