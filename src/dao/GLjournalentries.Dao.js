import Mongoose from 'mongoose'
import { GLSchema } from '../models/GL.Model'

const GLjournalentries = Mongoose.model('gljournalentries', GLSchema)

const saveGLjournalentries = async process => {
  console.log('DAO starting method saveGLjournalentries')
  const result = await GLjournalentries.bulkWrite(process)
  console.log('DAO ending method saveGLjournalentries')
  return result
}

const getGLjournalentries = async () => {
  console.log('method getGLjournalentries DAO started')
  const result = await GLjournalentries.find({}).select('-_id')
  console.log('method getGLjournalentries DAO ending')
  return result
}

export const GLjournalentriesDao = {
  saveGLjournalentries,
    getGLjournalentries
}

export default null