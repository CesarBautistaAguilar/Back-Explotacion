import { searchService } from '../service/Search.Service'

const saveClient = async (req, res) => {
  console.log('method saveClient Controller started')
  const requestBody = req.body
  console.log(`requestBody => ${JSON.stringify(requestBody)}`)
  const result = await searchService.saveClient(requestBody)
  console.log('method saveClient Controller ending')
  res.json(result)
}

const getClient = async (req, res) => {
  console.log('method getClient Controller started')
  const result = await searchService.getClient()
  console.log('method getClient Controller ending')
  res.json(result)
}

const saveLoans = async (req, res) => {
  console.log('method saveLoans Controller started')
  const requestBody = req.body
  console.log(`requestBody => ${JSON.stringify(requestBody)}`)
  const result = await searchService.saveLoans(requestBody)
  console.log('method saveLoans Controller ending')
  res.json(result)
}

const getLoans = async (req, res) => {
  console.log('method getLoans Controller started')
  const result = await searchService.getLoans()
  console.log('method getLoans Controller ending')
  res.json(result)
}

const saveTransactions = async (req, res) => {
  console.log('method saveTransactions Controller started')
  const requestBody = req.body
  console.log(`requestBody => ${JSON.stringify(requestBody)}`)
  const result = await searchService.saveTransactions(requestBody)
  console.log('method saveTransactions Controller ending')
  res.json(result)
}

const getTransactions = async (req, res) => {
  console.log('method getTransactions Controller started')
  const result = await searchService.getTransactions()
  console.log('method getTransactions Controller ending')
  res.json(result)
}

const saveGLjournalentries = async (req, res) => {
  console.log('method saveGLjournalentries Controller started')
  const requestBody = req.body
  console.log(`requestBody => ${JSON.stringify(requestBody)}`)
  const result = await searchService.saveGLjournalentries(requestBody)
  console.log('method saveGLjournalentries Controller ending')
  res.json(result)
}

const getGLjournalentries = async (req, res) => {
  console.log('method getGLjournalentries Controller started')
  const result = await searchService.getGLjournalentries()
  console.log('method getGLjournalentries Controller ending')
  res.json(result)
}

export const searchController = {
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
