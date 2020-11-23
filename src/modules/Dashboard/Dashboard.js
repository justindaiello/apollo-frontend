import React, { useState, useRef } from 'react';
import { isEmpty } from 'ramda';
import { Mutation } from 'react-apollo';

import Button from '../../components/Button';
import SlugForm from '../../components/SlugForm';
import { CREATE_SLUG_MUTATION, SLUG_QUERY } from './resolvers';
import {
  StyledDashboardWrapper,
  StyledDashBoardCard,
  StyledLinkDisplay,
} from './Dashboard.styled';
import { parseName, randomizer, checkForDuplicate } from './functions';

const prefix = 'new.url/';

function Dashboard() {
  const [formValues, setFormValues] = useState({
    name: '',
    baseUrl: '',
  });
  const [parsedUrl, setParsedUrl] = useState('');
  const [formError, setFormError] = useState('');
  const [allSlugs, setAllSlugs] = useState([]);
  const parsedUrlRef = useRef(null);

  function copyToClipBoard() {
    parsedUrlRef.current.select();
    return document.execCommand('copy');
  }

  async function parseUrl(e, callback) {
    e.preventDefault();
    setFormError('');

    if (isEmpty(formValues.baseUrl)) {
      return setFormError('A valid URL is required');
    }

    if (
      !isEmpty(formValues.name) &&
      !isEmpty(allSlugs) &&
      !checkForDuplicate(allSlugs, formValues.name)
    ) {
      return setFormError('This name already exists');
    }

    if (
      !isEmpty(formValues.name) &&
      !checkForDuplicate(allSlugs, formValues.name)
    ) {
      setParsedUrl(parseName(`${prefix}${formValues.name}`));
      await callback();
    }

    setParsedUrl(`${prefix}${randomizer()}`);
    return await callback();
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
        <Mutation
          mutation={CREATE_SLUG_MUTATION}
          variables={{
            name: formValues.name,
            baseUrl: parsedUrl,
          }}
          refetchQueries={[{ query: SLUG_QUERY }]}
          update={(cache) => {
            const currentLinks = cache.readQuery({ query: SLUG_QUERY });
            setAllSlugs(currentLinks.getSlugs);
          }}
        >
          {(createSlug, { loading }) => {
            return (
              <SlugForm
                loading={loading}
                error={formError}
                handleChange={handleChange}
                formValues={formValues}
                handleSubmit={async (e) => {
                  parseUrl(e, createSlug);
                }}
              />
            );
          }}
        </Mutation>
        {!isEmpty(parsedUrl) && (
          <StyledLinkDisplay>
            <p>{`Original URL: ${formValues.baseUrl}`}</p>
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
