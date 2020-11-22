import React from 'react';
import PropTypes from 'prop-types';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import GlobalStyle from '../styles/Global.styled';
import StyledAppWrapper from '../styles/Layout.styled';

const theme = {
  primary: '#333',
};

const link = createHttpLink({
  uri: 'https://codesandbox.io/s/friendly-shadow-8d92p?file=/schema.js:260-263',
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

function AppProviders({ children }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledAppWrapper>{children}</StyledAppWrapper>
      </ThemeProvider>
    </ApolloProvider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AppProviders;
