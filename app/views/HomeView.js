import React from 'react';

import Hello from '../components/hello';
import HotList from '../components/hotList';
import HotOrNot from '../components/hotOrNot';
import SearchBar from "../components/searchbar";
import Youtube from "../components/youtube";

const HomeView = props => {
  return (
    <div>
      <SearchBar/>
      <HotOrNot movieID="irgendwas"/>
      <HotList />
      <Youtube />
    </div>
  );
};

export default HomeView;
