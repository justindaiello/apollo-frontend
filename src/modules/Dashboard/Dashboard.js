import React, { useState, useEffect } from 'react';
import { isEmpty } from 'ramda';
import { Mutation } from 'react-apollo';

import Button from '../../components/Button';
import SlugForm from '../../components/SlugForm';
import { CREATE_SLUG_MUTATION, SLUG_QUERY } from './resolvers';
import {
  StyledDashboardWrapper,
  StyledDashboardCard,
  StyledLinkItem,
} from './Dashboard.styled';
import {
  parseName,
  randomizer,
  checkForDuplicate,
  copyToClipBoard,
} from './functions';

const prefix = 'new.url/';

function Dashboard() {
  const [formValues, setFormValues] = useState({
    name: '',
    baseUrl: '',
  });
  const [parsedUrl, setParsedUrl] = useState('');
  const [formError, setFormError] = useState('');
  const [allSlugs, setAllSlugs] = useState([]);
  const [copied, setCopied] = useState(false);

  /**
   * Fade copied to clipboard text back out of view
   */
  useEffect(() => {
    const timeout = copied
      ? setTimeout(() => {
          setCopied(false);
        }, 2000)
      : null;

    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  /**
   * Validate and submit form
   * @param {Object} e - event object
   * @param {Function} callback - mutation method that gets run if validations clear
   */
  async function parseUrl(e, callback) {
    console.log('running');
    e.preventDefault();
    setFormError('');

    // Set error if there is no baseUrl
    if (isEmpty(formValues.baseUrl)) {
      console.log('[hit 1]');
      return setFormError('A valid URL is required');
    }

    // Set error if the name value already exists in the DB
    if (
      !isEmpty(formValues.name) &&
      !isEmpty(allSlugs) &&
      checkForDuplicate(allSlugs, formValues.name)
    ) {
      console.log('[hit 2]');
      return setFormError('This name already exists');
    }

    // Submit form if there is a name value
    if (
      !isEmpty(formValues.name) &&
      !checkForDuplicate(allSlugs, formValues.name)
    ) {
      console.log('[hit 3]');
      setParsedUrl(parseName(`${prefix}${formValues.name}`));
      return await callback();
    }

    // Submit form if there is just a baseUrl value
    console.log('[hit 4]');
    setParsedUrl(`${prefix}${randomizer()}`);
    return await callback();
  }

  /**
   * Handle change for both form inputs and update state
   * @param {Object} e - event object that we de-structure value and name from
   */
  function handleChange(e) {
    const { value, name } = e.target;

    return setFormValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  console.log(allSlugs);

  return (
    <StyledDashboardWrapper>
      <StyledDashboardCard>
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
            !!currentLinks && setAllSlugs(currentLinks.getSlugs);
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
        <StyledLinkItem isVisible={!isEmpty(parsedUrl)}>
          <p>{formValues.baseUrl}</p>
          <p>{parsedUrl}</p>
          <Button
            blank
            onClick={() => {
              copyToClipBoard(parsedUrl);
              return setCopied(true);
            }}
          >
            Copy
          </Button>
          {copied && <span copied={copied}>Copied to Clipboard</span>}
        </StyledLinkItem>
      </StyledDashboardCard>
    </StyledDashboardWrapper>
  );
}

export default Dashboard;
