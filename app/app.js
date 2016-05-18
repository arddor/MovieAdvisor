import React, {Component} from 'react';

import HotList from './components/hotList';
import HotOrNot from './components/hotOrNot';
import SearchBar from "./components/searchbar";
import Player from './components/player';
import MovieInfo from './components/movieInfo';
import {Grid, Row, Col} from 'react-bootstrap';


const App = props => {
  return (
    <Grid>
      <Row>
        <SearchBar/>
      </Row>
      <Row>
        <Col md={2}>
          <HotList/>
        </Col>
        <Col md={8}>
          <Player />
          <HotOrNot movieID="irgendwas"/>
        </Col>
        <Col md={2}>
          <MovieInfo />
        </Col>
      </Row>
    </Grid>
  );
};

export default App;
