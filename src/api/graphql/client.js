/* eslint-disable no-unused-vars */
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
/*

const httpLink = createHttpLink({
  uri: 'https://api.sandbox.cooltix.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // Get the token from localStorage or your auth provider
  const token = localStorage.getItem('token'); // or however you store it
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

*/

export const apolloClient = new ApolloClient({
  uri: 'https://api.sandbox.cooltix.com/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
