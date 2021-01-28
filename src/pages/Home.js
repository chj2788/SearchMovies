/* eslint-disable */
import React, { useState, useEffect, useCallback } from 'react';
import CastGrid from '../components/cast/CastGrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from './Home.styled';

const renderResults = results => {
  if (results && results.length === 0) {
    return <div>No results</div>;
  }
  if (results && results.length > 0) {
    return results[0].show ? (
      <ShowGrid data={results} />
    ) : (
      <CastGrid data={results} />
    );
  }
  return null;
};

const Home = () => {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const [searchOptions, setSearchOptions] = useState('shows');

  const isShow = searchOptions === 'shows';

  const onInputChange = useCallback(
    event => {
      setInput(event.target.value);
    },
    [setInput]
  );

  useEffect(() => {
    return () => {};
  }, [searchOptions]);

  const onSearch = () => {
    apiGet(`/search/${searchOptions}?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onKeyDown = event => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = useCallback(event => {
    setSearchOptions(event.target.value);
  }, []);

  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        placeholder="Search here"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShow}
            onChange={onRadioChange}
          />
        </div>
        <div>
          <CustomRadio
            label="Cast"
            id="people-search "
            value="people"
            checked={!isShow}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults(results)}
    </MainPageLayout>
  );
};

export default Home;
