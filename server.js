import express from 'express'
import expressGraphQL from 'express-graphql'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

import schema from './graphql'
const db = require('./keys-dev.js')

const app = express()
const PORT = process.env.PORT || 4000
const opts = {
  useCreateIndex: true,
  useNewUrlParser: true
}

mongoose.connect(db.mongoDB, opts)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  })
)

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`))
