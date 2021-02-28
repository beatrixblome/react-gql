import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from '@apollo/client';
import ApolloClient from 'apollo-boost';

import { LanguageSearch } from './containers/LanguageSearch'
import { Header } from './containers/Header'

import './styles/style.css'

export default function App() {

  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}> 
      <Header/>
      <LanguageSearch/> 
    </ApolloProvider>
  );
}
