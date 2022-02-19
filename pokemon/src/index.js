import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.graphcdn.app/',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
