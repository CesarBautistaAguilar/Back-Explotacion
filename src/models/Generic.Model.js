import mongoose from 'mongoose'

export const GenericSchema = new mongoose.Schema(
  {
    id: String
  },
  {
    versionKey: false,
    strict: false
  }
)

export default null
