const express = require('express');
const expressPlayground = require('graphql-playground-middleware-express').default;
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql/Post.js');
const postService = require('./src/service/PostService');
const PORT = process.env.PORT || 4000;
// Create an express server and a GraphQL endpoint
const app = express();

const cors = require('cors')
app.use(cors())

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            postService: new postService()
        };
    },
    path: '/graphql'
});
server.applyMiddleware({ app });
app.get('/playground',
    expressPlayground({
        endpoint: '/graphql'
    })
);
app.listen({ port: PORT }, () => {
    console.log('Server listening on port 4000')
});

const costAnalysis = require('graphql-cost-analysis').default
const costAnalyzer = costAnalysis({
    maximumCost: 1000,
  })
  
const graphqlExpress = require('express');
app.use(
  '/graphql',
  graphqlExpress(req => {
    return {
      schema,
      rootValue: null,
      validationRules: [
        costAnalysis({
          variables: req.body.variables,
          maximumCost: 1000,
        }),
      ],
    }
  })
)


const depthLimit = require('graphql-depth-limit');
const graphqlHTTP = require('express-graphql');
 
app.use('/graphql', graphqlHTTP((req, res) => ({
  schema,
  validationRules: [ depthLimit(0) ]
})))
