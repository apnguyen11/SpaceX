import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import './App.css';
import Launches from './components/Launches'


const client = new ApolloClient({
  uri: '/graphql'
})
function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
     <h1>SpaceX</h1>
    </div>
    <Launches />
    </ApolloProvider>
  );
}

export default App;
