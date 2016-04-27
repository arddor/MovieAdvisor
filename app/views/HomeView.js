import React from 'react';

import Hello from '../components/hello';
import SearchBar from "../components/searchbar";

const HomeView = props => {
  return (
    <div>
      <Hello text="Welcome to Movie Advisor"/>
      <SearchBar/>
    </div>
  );
};

export default HomeView;
