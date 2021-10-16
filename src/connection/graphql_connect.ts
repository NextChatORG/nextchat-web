import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

// Create the apollo client
const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  uri: 'https://nextchat-api.herokuapp.com',
})

// Create the provider for the graphql api
const apolloProvider = createApolloProvider({
  defaultClient: client,
})

export default apolloProvider
