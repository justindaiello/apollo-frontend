import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const SLUG_QUERY = gql`
  query {
    getSlugs {
      id
      name
      baseUrl
    }
  }
`;

function Slugs() {
  return (
    <Query query={SLUG_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching..</div>;
        if (error)
          return (
            <div>
              {console.log("[error]", error)}
              Error
            </div>
          );

        return (
          <div>
            {data.getSlugs.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        );
      }}
    </Query>
  );
}

export default Slugs;
