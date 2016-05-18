import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {next, previous} from '../../redux/playlist';
import {Row, Col, Button} from 'react-bootstrap';
import Youtube from '../youtube';

import playercss from './player.local.css';


class Player extends Component {
  constructor(props) {
    super(props);

    this.onPreviousClick = this.onPreviousClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
  }

  onPreviousClick() {
    this.props.previous();
  }

  onNextClick() {
    this.props.next();
  }

  render() {
    let {index, results} = this.props.playlist;

    let player;
    if (results.length > 0 && results.length > index) {
      if (results[index].youtube) {
        let {key} = results[index].youtube;


        player = <Youtube id={key}/>;
      }
      else {
        player = <div>NO VIDEO FOUND</div>
      }

    } else {
      player = <div>NOTHING FOUND</div>
    }

    return (
      <Row>
        <Row>
          <Col xs={6}>
            <Button className={playercss.navbtnprev} onClick={this.onPreviousClick}>Previous</Button>
          </Col>
          <Col xs={6}>
            <Button className={playercss.navbtnnext} onClick={this.onNextClick}>Next</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className={playercss.frame}>
            <div className="embed-responsive.embed-responsive-16by9">{player}</div>
          </Col>
        </Row>
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
