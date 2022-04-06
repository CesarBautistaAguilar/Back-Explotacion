import mongoose from 'mongoose'

export const GLSchema = new mongoose.Schema(
  {
    entryID: Number
  },
  {
    versionKey: false,
    strict: false
  }
)

export default null
