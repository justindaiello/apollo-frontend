import React from "react";
import PropTypes from "prop-types";

import Input from "../Input";
import Button from "../Button";
import { StyledFormWrapper } from "./SlugForm.styled";

function SlugForm({ handleSubmit, handleChange, formValues, error }) {
  return (
    <StyledFormWrapper onSubmit={handleSubmit}>
      <div>
        <label htmlFor="url">Enter Link Name (optional)</label>
        <Input
          onChange={handleChange}
          name="name"
          id="name"
          value={formValues.name}
          placeholder="Enter link name"
        />
      </div>
      <div>
        <label htmlFor="url">Enter your link:</label>
        <Input
          onChange={handleChange}
          name="url"
          id="url"
          value={formValues.url}
          placeholder="Enter your url"
        />
        {!!error && <span>{error}</span>}
      </div>
      <Button type="submit">Shorten URL</Button>
    </StyledFormWrapper>
  );
}

SlugForm.propTypes = {
  error: PropTypes.string,
  formValues: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
};

export default SlugForm;
