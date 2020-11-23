import gql from 'graphql-tag';

/**
 * Mutation to create a slug in the db
 * @param {string} name - aliased name
 * @param {string} baseUrl - url to get parsed
 * @returns {Object}
 */
export const CREATE_SLUG_MUTATION = gql`
  mutation CREATE_SLUG_MUTATION($name: String!, $baseUrl: String!) {
    createSlug(name: $name, baseUrl: $baseUrl) {
      id
      name
      baseUrl
    }
  }
`;

/**
 * Query all slugs
 * @returns {Array<Object>}
 */
export const SLUG_QUERY = gql`
  query {
    getSlugs {
      id
      name
      baseUrl
    }
  }
`;
