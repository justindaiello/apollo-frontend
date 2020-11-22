import React, { useState, useRef } from "react";
// import gql from "graphql-tag";
// import { Mutataion } from "react-apollo";

import Button from "../../components/Button";
import SlugForm from "../../components/SlugForm";
import {
  StyledDashboardWrapper,
  StyledDashBoardCard,
  StyledLinkDisplay
} from "./Dashboard.styled";

// const CREATE_SLUG_MUTATION = gql`
//   mutation CREATE_SLUG_MUTATION($name: String!, $baseUrl: String!) {
//     createSlug(name: $name, $baseUrl: $baseUrl) {
//       id
//       name
//       baseUrl
//     }
//   }
// `;

function Dashboard() {
  const [formValues, setFormValues] = useState({
    name: "",
    url: ""
  });
  const [parsedUrl, setParsedUrl] = useState("");
  const [error, setError] = useState("");
  const parsedUrlRef = useRef(null);

  function copyToClipBoard() {
    parsedUrlRef.current.select();
    return document.execCommand("copy");
  }

  function randomizer() {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 5);
  }

  function parseUrl(e) {
    e.preventDefault();
    setError("");

    const prefix = "https://mynewUrl";

    if (!formValues.url) {
      setError("A valid URL is required");
    }

    if (!!formValues.name) {
      return setParsedUrl(`${prefix}/${formValues.name}`);
    }

    return setParsedUrl(`${prefix}/${randomizer()}`);
  }

  function handleChange(e) {
    const { value, name } = e.target;

    return setFormValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  return (
    <StyledDashboardWrapper>
      <StyledDashBoardCard>
        <h1>Shorten Your URL</h1>
        <SlugForm
          error={error}
          handleChange={handleChange}
          formValues={formValues}
          handleSubmit={parseUrl}
        />
        {!!parsedUrl && (
          <StyledLinkDisplay>
            <p>{`Original URL: ${formValues.url}`}</p>
            <p>New Url:</p>
            <textarea readOnly rows={1} ref={parsedUrlRef} value={parsedUrl} />

            <Button onClick={copyToClipBoard}>Copy</Button>
          </StyledLinkDisplay>
        )}
      </StyledDashBoardCard>
    </StyledDashboardWrapper>
  );
}

export default Dashboard;
