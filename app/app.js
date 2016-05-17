import React, {Component} from 'react';

import HotList from './components/hotList';
import HotOrNot from './components/hotOrNot';
import SearchBar from "./components/searchbar";
import Player from './components/player';
import MovieInfo from './components/MovieInfo'
import {Grid} from 'react-bootstrap';


const App = props => {
  return (
    <Grid>
      <div>
        <h1>Movie Advisor</h1>
        <SearchBar/>
        <Player />
        <HotOrNot movieID="irgendwas"/>
        <HotList />
        <MovieInfo />
      </div>
    </Grid>
  );
};

export default App;
