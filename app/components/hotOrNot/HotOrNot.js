import React, {Component} from 'react';
import {ButtonToolbar, Button, Glyphicon} from 'react-bootstrap';
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
    return (
      < div
        className="hotOrNot">
        < ButtonToolbar >
          < Button
            bsSize="large"
            onClick={this.onHotClicked}><
            Glyphicon
            glyph="thumbs-up"/> {this.props.hot}</
            Button >
          < Button bsSize="large" onClick={this.onNotClicked}><
            Glyphicon
            glyph="thumbs-down"/> {this.props.not}
          </Button >
        </ ButtonToolbar >
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
