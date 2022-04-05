import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/Routes'
import Constans from './commons/Constans'
import { createConnection } from './commons/Connection'

const app = express()
const PORT = Constans.PORT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(`/${Constans.CONTEXT_NAME}/${Constans.VERSION}/`, router)

createConnection().then(() => {
  app.listen(PORT, () => {
    console.log(
      `Example app listening at http://localhost:${PORT}/${Constans.CONTEXT_NAME}/${Constans.VERSION}/`
    )
  })
})

module.exports = app
