import React from 'react';
import PropTypes from 'prop-types';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import theme from '../styles/theme';
import GlobalStyle from '../styles/Global.styled';
import StyledAppWrapper from '../styles/Layout.styled';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://8d92p.sse.codesandbox.io/',
  }),
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
