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

  randomIDGenerator() {
    return Math.floor((Math.random() * 1000) + 1);
  }

  onHotClicked() {
    this.props.addToHot(this.randomIDGenerator());
  }

  onNotClicked() {
    this.props.addToNot(this.randomIDGenerator());
  }

  render() {
    return (
      <div className="hotOrNot">
        <ButtonToolbar>
          <Button bsSize="large" onClick={this.onHotClicked}><Glyphicon glyph="thumbs-up"/> {this.props.hot}</Button>
          <Button bsSize="large" onClick={this.onNotClicked}><Glyphicon glyph="thumbs-up"/> {this.props.hot}</Button>
        </ButtonToolbar>
      </div>
    );
  }
}
;

HotOrNot.defaultProps = {
  hot: 'Hot',
  not: 'Not'
};
const mapStateToProps = (state) => ({
  ...state.hotOrNot
})
;

const mapDispatchToProps = dispatch => {
  return bindActionCreators(HotOrNotActionCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(HotOrNot);
