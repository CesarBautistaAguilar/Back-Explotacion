import mongoose from 'mongoose'
import Constans from '../commons/Constans'

export const createConnection = async () => {
  const instance = mongoose.connect(Constans.URI)
  const db = (await instance).connection

  db.on('error', console.error.bind(console, 'connection error: '))
  db.once('open', () => console.log(`Connection to DB successful`))

  return instance
}

export default null
