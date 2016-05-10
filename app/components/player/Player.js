import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {next, previous} from '../../redux/playlist';
import {Row, Col, Button} from 'react-bootstrap';
import Youtube from '../youtube';

import css from './player.local.css';


class Player extends Component {
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
      player = <Youtube id={key} />;
    } else {
      player = <di>NOTHING FOUND</di>
    }

    return (
      <Row>
        <Col xs={1}>
          <Button onClick={this.onPreviousClick}>Previous</Button>
        </Col>
        <Col xs={10} className={css.frame}>
          {player}
        </Col>
        <Col xs={1}>
          <Button onClick={this.onNextClick}>Next</Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  playlist: state.playlist
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({previous, next}, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);
