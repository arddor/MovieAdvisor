import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Hello from './components/hello';
import HotList from './components/hotList';
import HotOrNot from './components/hotOrNot';
import SearchBar from "./components/searchbar";
import Youtube from "./components/youtube";
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {next, previous} from './redux/playlist';

class App extends Component {
  constructor(props){
    super(props);

    this.onPreviousClick = this.onPreviousClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
  }

  onPreviousClick(){
    this.props.previous();
  }

  onNextClick(){
    this.props.next();
  }

  render() {
    let {index, results} = this.props.playlist;

    let player;
    if (results.length > 0 && results.length >= index) {
      let {key} = results[index].youtube;
      const youtubeLink = `https://www.youtube.com/embed/${key}?autoplay=1`;
      player = <Youtube url={youtubeLink}/>;
    } else {
      player = <di>NOTHING FOUND</di>
    }

    return (
      <Grid>
        <div>
          <SearchBar/>
          <Row>
            <Col md={1}><Button onClick={this.onPreviousClick}>Previous</Button></Col>
            <Col md={10}>
              {player}
            </Col>
            <Col md={1}><Button onClick={this.onNextClick}>Next</Button></Col>
          </Row>
          <HotOrNot movieID="irgendwas"/>
          <HotList />
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  playlist: state.playlist
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({previous, next}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
