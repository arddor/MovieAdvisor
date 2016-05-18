import React, {Component} from 'react';

import HotList from './components/hotList';
import HotOrNot from './components/hotOrNot';
import SearchBar from "./components/searchbar";
import Player from './components/player';
import {Grid, Row, Col} from 'react-bootstrap';


const App = props => {
  return (
    <Grid>
    <Row>
      <div>
        <Col md={12}><h1>Movie Advisor</h1></Col>
        <Col md={2}>
          <HotList />
        </Col>
        <Col md={8}>
          <SearchBar/>
          <Player />
          <HotOrNot movieID="irgendwas"/>
        </Col>
        <Col md={2}>hier sollen die movie infos hin</Col>
      </div>
    </Row>
      </Grid>
  );
};

export default App;
