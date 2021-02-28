
import React              from 'react';
import ApolloClient       from 'apollo-boost';
import { InMemoryCache }  from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks'
import { SearchInput }      from './containers/SearchInput'
import { Header }         from './containers/Header'

import './styles/style.css'

export default function App() {

  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}> 
      <Header/>
      <SearchInput/> 
    </ApolloProvider>
  );
}
