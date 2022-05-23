import mongoose from 'mongoose'
import Moment from 'moment'

export const GenericSchema = new mongoose.Schema(
  {
    id: String,
    encodedKey: String
  },
  {
    versionKey: false,
    strict: false,
    timestamps: {
      currentTime: () => Moment(Moment.now(), 'x').toISOString()
    }
  }
)

export default null
