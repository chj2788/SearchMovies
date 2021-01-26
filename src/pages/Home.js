/* eslint-disable */
import React, { useState } from 'react';
import CastGrid from '../components/cast/CastGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOptions, setSearchOptions] = useState('shows');

  const isShow = searchOptions === 'shows';

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/${searchOptions}?q=${input}`).then(result => {
      setResults(result);
      console.log(result);
    });
  };

  const onKeyDown = event => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
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

  const onRadioChange = event => {
    setSearchOptions(event.target.value);
  };

  console.log(searchOptions);

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search here"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <div>
        <label htmlFor="shows-search">
          Shows
          <input
            id="shows-search"
            type="radio"
            value="shows"
            checked={isShow}
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor="people-search">
          Cast
          <input
            id="people-search "
            type="radio"
            value="people"
            checked={!isShow}
            onChange={onRadioChange}
          />
        </label>
      </div>

      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
