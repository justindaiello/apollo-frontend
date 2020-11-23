import React from 'react';
import { isEmpty } from 'ramda';
import PropTypes from 'prop-types';

import Input from '../Input';
import Button from '../Button';
import { StyledFormWrapper } from './SlugForm.styled';

function SlugForm({ handleSubmit, handleChange, formValues, error, loading }) {
  return (
    <StyledFormWrapper onSubmit={handleSubmit}>
      <div>
        <label htmlFor="url">Enter Link Alias (optional)</label>
        <Input
          onChange={handleChange}
          name="name"
          id="name"
          value={formValues.name}
          placeholder="Enter an Alias"
        />
      </div>
      <div>
        <label htmlFor="baseUrl">Enter Your Link:</label>
        <Input
          onChange={handleChange}
          name="baseUrl"
          id="baseUrl"
          value={formValues.baseUrl}
          placeholder="Enter your URL"
        />
        {!isEmpty(error) && <span>{error}</span>}
      </div>
      <Button type="submit" disabled={loading}>
        Shorten URL
      </Button>
    </StyledFormWrapper>
  );
}

SlugForm.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  formValues: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

export default SlugForm;
