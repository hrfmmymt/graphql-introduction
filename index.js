const express = require('express')
const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    message: String
  }
`)

const root = {
  message: () => 'hello, GraphQL world!'
}

const app = express()

app.use(
  '/graphql',
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)

app.listen(5454, () =>
  console.log(
    'Express GraphQL Server Now Running On http://localhost:5454/graphql'
  )
)
