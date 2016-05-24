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
        <Col md={3}><HotList/></Col>
      </Row>
      <Row>
        <Col md={3}>

        </Col>
        <Col md={6}>
          <div className="backgroundCircle">
            <Player/>
            <Keywords/>
            <MovieInfo/>
          </div>
        </Col>
        <Col md={3}>
          <HotOrNot/>
        </Col>
      </Row>
    </Grid>
  );
};

export default App;


/*
.backgroundCircle {
  border-radius: 50%;
	width: 100%;
	height: auto;
  background: white;
  position: absolute;
  padding-top: 100%;
}
*/
