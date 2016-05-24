import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {next, previous, movieDetail, search} from '../../redux/playlist';
import {Row, Col, Button, Glyphicon} from 'react-bootstrap';
import Youtube from '../youtube';

import playercss from './player.local.css';


class Player extends Component {
  constructor(props) {
    super(props);

    this.onPreviousClick = this.onPreviousClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
  }

  onPreviousClick() {
    let {index, results} = this.props;
    index -= 1;
    if (results.length > 0 && results.length > index && index >= 0){
      let {id} = results[index];
      this.props.previous();
      this.props.movieDetail(id);
    } else if(this.props.page > 0){
      this.props.search(
        this.props.genres,
        this.props.keywords,
        this.props.actors,
        this.props.yearRange.min,
        this.props.yearRange.max,
        this.props.page - 1
      );
    }
  }

  onNextClick() {
    let {index, results} = this.props;
    index += 1;
    if (results.length > 0 && results.length > index){
      let {id} = results[index];
      this.props.next();
      this.props.movieDetail(id);
    } else if(this.props.page < this.props.total_pages){
      this.props.search(
        this.props.genres,
        this.props.keywords,
        this.props.actors,
        this.props.yearRange.min,
        this.props.yearRange.max,
        this.props.page + 1
      );
    }
  }


  render() {

    let {currentMovie} = this.props;

    let player;
    if(currentMovie){
      console.log(currentMovie);
      if(currentMovie.videos && currentMovie.videos.results.length >  0) player = <Youtube id={currentMovie.videos.results[0].key}/>;
      else player = <div>NO VIDEO FOUND</div>;
    } else {
      player = <div>NO VIDEO FOUND</div>
    }

    return (
      <div>
        <Row className="prevNextButtons">
          <Col xs={6}>
            <Button className={playercss.navbtnprev} onClick={this.onPreviousClick}><Glyphicon
              glyph="chevron-left"/> Previous</Button>
          </Col>
          <Col xs={6}>
            <Button className={playercss.navbtnnext} onClick={this.onNextClick}>Next <Glyphicon
              glyph="chevron-right"/></Button>
          </Col>
        </Row>
        <Row ref='videoframe'>
          <Col id="video" className={playercss.frame}>
            <div className="embed-responsive embed-responsive-16by9">{player}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.playlist,
  ...state.search
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({previous, next, movieDetail, search}, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);
