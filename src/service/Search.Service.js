import fetch from 'node-fetch'
import Constans from '../commons/Constans'
import { Utils } from '../commons/Utils'
import { ClientsDao } from '../dao/Clients.Dao'
import { loansDao } from '../dao/Loans.Dao'
import { TransactionsDao } from '../dao/Transactions.Dao'
import { GLjournalentriesDao } from '../dao/GLjournalentries.Dao'

const saveClient = async (document) => {
  console.log('method saveClient Service started')
  const allbulk = []
  const response = await fetch(`${Constans.URL_MAMBU}/clients:search?paginationDetails=OFF&detailsLevel=FULL`,{
    method: 'post',
    body: JSON.stringify(Utils.typeToday('lastModifiedDate')),
    headers: Utils.headers
  })
  const responseParse = await response.json()
  const process = JSON.parse(JSON.stringify(responseParse))
  process.forEach(property => {
    allbulk.push(Utils.createUpertBulkID(property))
  })
  const result = await ClientsDao.saveClient(allbulk)
  console.log(`result insert => ${JSON.stringify(result)}`)
  console.log(`result search => ${JSON.stringify(responseParse.length)}`)
  console.log('method saveClient Service ending')
  return responseParse
}

const getClient = async (document) => {
  console.log('method getClient Service started')
  const result = await ClientsDao.getClient()
  console.log(`result=> ${JSON.stringify(result)}`)
  console.log('method getClient Service ending')
  return result
}

const saveLoans = async (document) => {
  console.log('method saveLoans Service started')
  const allbulk = []
  const response = await fetch(`${Constans.URL_MAMBU}/loans:search?paginationDetails=OFF&detailsLevel=FULL`,{
    method: 'post',
    body: JSON.stringify(Utils.typeToday('lastModifiedDate')),
    headers: Utils.headers
  })
  const responseParse = await response.json()
  const process = JSON.parse(JSON.stringify(responseParse))
  process.forEach(property => {
    allbulk.push(Utils.createUpertBulkID(property))
  })
  const result = await loansDao.saveLoans(allbulk)
  console.log(`result insert => ${JSON.stringify(result)}`)
  console.log(`result search => ${JSON.stringify(responseParse.length)}`)
  console.log('method saveLoans Service ending')
  return responseParse
}

const getLoans = async (document) => {
  console.log('method getLoans Service started')
  const result = await loansDao.getLoans()
  console.log(`result=> ${JSON.stringify(result)}`)
  console.log('method getLoans Service ending')
  return result
}

const saveTransactions = async (document) => {
  console.log('method saveTransactions Service started')
  const allbulk = []
  const response = await fetch(`${Constans.URL_MAMBU}/loans/transactions:search?paginationDetails=OFF&detailsLevel=FULL`,{
    method: 'post',
    body: JSON.stringify(Utils.typeToday('creationDate')),
    headers: Utils.headers
  })
  const responseParse = await response.json()
  const process = JSON.parse(JSON.stringify(responseParse))
  process.forEach(property => {
    allbulk.push(Utils.createUpertBulkID(property))
  })
  const result = await TransactionsDao.saveTransactions(allbulk)
  console.log(`result insert => ${JSON.stringify(result)}`)
  console.log(`result search => ${JSON.stringify(responseParse.length)}`)
  console.log('method saveTransactions Service ending')
  return responseParse
}

const getTransactions = async (document) => {
  console.log('method getTransactions Service started')
  const result = await TransactionsDao.getTransactions()
  console.log(`result=> ${JSON.stringify(result)}`)
  console.log('method getTransactions Service ending')
  return result
}

const saveGLjournalentries = async (document) => {
  console.log('method saveGLjournalentries Service started')
  const allbulk = []
  const bodysearch = Utils.typeTodayandField('creationDate', document)
  const response = await fetch(`${Constans.URL_MAMBU}/gljournalentries:search?paginationDetails=OFF&detailsLevel=FULL`,{
    method: 'post',
    body: JSON.stringify(bodysearch),
    headers: Utils.headers
  })
  const responseParse = await response.json()
  const process = JSON.parse(JSON.stringify(responseParse))
  process.forEach(property => {
    allbulk.push(Utils.createUpertBulkEntryID(property))
  })
  const result = await GLjournalentriesDao.saveGLjournalentries(allbulk)
  console.log(`result insert => ${JSON.stringify(result)}`)
  console.log(`result search => ${JSON.stringify(responseParse.length)}`)
  console.log('method saveGLjournalentries Service ending')
  return responseParse
}

const getGLjournalentries = async (document) => {
  console.log('method getGLjournalentries Service started')
  const result = await GLjournalentriesDao.getGLjournalentries()
  console.log(`result=> ${JSON.stringify(result)}`)
  console.log('method getGLjournalentries Service ending')
  return result
}

export const searchService = {
  saveClient,
  getClient,
  saveLoans,
  getLoans,
  saveTransactions,
  getTransactions,
  saveGLjournalentries,
  getGLjournalentries
}

export default null
