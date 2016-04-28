import React from 'react';
import css from './SearchBar.local.css';
import YearSlider from './YearSlider';
import MovieSelect from './MovieSelect';


const SearchBar = props => {
  return (
    <div>
      <h1 className={css.div}>{props.text}</h1>
      <MovieSelect />
      <YearSlider />
    </div>
  );
};

SearchBar.defaultProps = {
  text: 'Search Here:'
};

export default SearchBar;
