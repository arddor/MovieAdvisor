import React from 'react';

import Hello from '../components/hello';
import HotList from '../components/hotList';
import HotOrNot from '../components/hotOrNot';
import SearchBar from "../components/searchbar";

const HomeView = props => {
  return (
    <div>
      <Hello text="Welcome to Movie Advisor"/>
      <SearchBar/>
      <HotOrNot movieID="irgendwas"/>
      <HotList />
    </div>
  );
};

export default HomeView;
