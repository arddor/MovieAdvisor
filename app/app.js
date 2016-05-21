import React, {Component} from 'react';

import HotList from './components/hotList';
import HotOrNot from './components/hotOrNot';
import SearchBar from "./components/searchbar";
import Player from './components/player';
import Keywords from './components/keywords';
import MovieInfo from './components/movieInfo';
import {Grid, Row, Col} from 'react-bootstrap';
import css from './app.css';



const App = props => {
  return (
    <Grid fluid>
      <Row>
        <Col md={3}><h1 className="app-title">Movie Advisor</h1></Col>
        <Col md={6}><SearchBar/></Col>
      </Row>
      <Row>
        <Col md={3}>
          <HotList/>
        </Col>
        <Col md={6}>
          <Player />
          <HotOrNot/>
          <Keywords/>
        </Col>
        <Col md={3}>
          <MovieInfo />
        </Col>
      </Row>
    </Grid>
  );
};

export default App;
