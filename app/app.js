import React, {Component} from 'react';

import HotList from './components/hotList';
import HotOrNot from './components/hotOrNot';
import SearchBar from "./components/searchbar";
import Player from './components/player';
import MovieInfo from './components/movieInfo';
import {Grid, Row, Col} from 'react-bootstrap';

import appcss from './app.local.css';


const App = props => {
  return (
    <Grid fluid className={appcss.bodyBG}>
      <Row>
        <Col md={6} xsOffset={3}><SearchBar/></Col>
      </Row>
      <Row>
        <Col md={3}>
          <HotList/>
        </Col>
        <Col md={6}>
          <Player />
          <HotOrNot/>
        </Col>
        <Col md={3}>
          <MovieInfo />
        </Col>
      </Row>
    </Grid>
  );
};

export default App;
