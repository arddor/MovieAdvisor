import React, {Component} from 'react';
import {Row, Col, Button, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HotOrNotActionCreators from './HotOrNotDucks.js';

import css from './HotOrNot.css';
class HotOrNot extends Component {

  constructor(props) {
    super(props);
    this.onHotClicked = this.onHotClicked.bind(this);
    this.onNotClicked = this.onNotClicked.bind(this);
  }

  alreadyExists(list, movieObj) {
    console.log(list);
    if (list.length > 0) {
      return list.indexOf(movieObj) > -1;
    }
    else {
      return false;
    }
  }

  getMovieObject(){
    var index = this.props.playlist.index;
    var movie = this.props.playlist.results[index];
    return movie;
  }

  onHotClicked() {
    var movieObj = this.getMovieObject();
    if (!this.alreadyExists(this.props.hotOrNot.hotlist, movieObj)) {
      console.log(movieObj);
      this.props.addToHot(movieObj);
    }
    else {
      alert('already in your hotlist');
    }
  }

  onNotClicked() {
    var movieObj = this.getMovieObject();
    if (!this.alreadyExists(this.props.hotOrNot.notlist, movieObj)) {
      this.props.addToNot(movieObj);
    }
    else {
      alert('already in your notlist');
    }
  }

  render() {
    console.log(this.props.playlist);
    return (
      < div
        className="hotOrNot">
        <Row>
          <Col xs={6}>
            <Button bsStyle="danger" onClick={this.onHotClicked}><
              Glyphicon
              glyph="fire"/> {this.props.hot}</
              Button >
          </Col>
          <Col xs={6}>
            <Button onClick={this.onNotClicked} bsStyle="warning">{this.props.not} <
              Glyphicon
              glyph="thumbs-down"/>
            </Button >
          </Col>
        </Row>
      </ div >
    );
  }
}
;

HotOrNot.defaultProps = {
  hot: 'Hot',
  not: 'Not'
};
const mapStateToProps = (state) =>
    ({
      playlist: state.playlist,
      hotOrNot: state.hotOrNot
    })
  ;

const mapDispatchToProps = dispatch => {
  return bindActionCreators(HotOrNotActionCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(HotOrNot);
