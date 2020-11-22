import styled from "styled-components";

export const StyledFormWrapper = styled.form`
  display: block;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div:first-of-type {
    margin-bottom: 1rem;
  }

  div:last-of-type {
    position: relative;
  }

  label {
    margin-bottom: 0.5rem;
  }

  button {
    margin-top: 1.5rem;
    align-self: center;
  }

  span {
    color: red;
    position: absolute;
    top: 70px;
  }
`;
