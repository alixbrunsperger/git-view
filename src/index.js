import React from "react";
import ReactDOM from "react-dom";
import MainContainer from "./containers/MainContainer";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { API_URL } from './utils/constants'

const client = new ApolloClient({
    link: new HttpLink({ uri: API_URL, headers: { authorization: 'bearer b5b7d63ac7b06082ffbf9d698acc2d02bf768d9e' } }),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <MainContainer />
    </ApolloProvider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
