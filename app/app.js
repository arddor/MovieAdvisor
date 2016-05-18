import React, {Component} from 'react';

import HotList from './components/hotList';
import HotOrNot from './components/hotOrNot';
import SearchBar from "./components/searchbar";
import Player from './components/player';
import Keywords from './components/keywords';
import {Grid} from 'react-bootstrap';


const App = props => {
  return (
    <Grid>
      <div>
        <SearchBar/>
        <Keywords />
        <Player />
        <HotOrNot movieID="irgendwas"/>
        <HotList />
      </div>
    </Grid>
  );
};

export default App;
