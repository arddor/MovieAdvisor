import React, {Component} from 'react';
import {Row, Col, Image, Button, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import hotlistcss from './HotList.local.css';
import * as HotListActionCreators from '../hotOrNot/HotOrNotDucks';

class HotList extends Component {
  constructor(props) {
    super(props);
    this.clearHotlist = this.clearHotlist.bind(this);
    this.remove = this.remove.bind(this);
  }

  clearHotlist() {
    this.props.clearHotlist();
  }

  remove(index) {
    this.props.removeFromHotlist(index);
  }

  render() {
    var results = this.props.hotlist;


    return (
      <div>
        <h5>Your Hotlist</h5>
        {results.map(function (result, index) {
          return <Row className={hotlistcss.hotlistitem} key={result.id}>
            <Col md={5}><Image responsive src={"http://image.tmdb.org/t/p/w300"+result.backdrop_path}/></Col>
            <Col md={7}> {result.original_title}
            <Button onClick={() => this.remove(index)}>Remove from Hotlist</Button></Col>
          </Row>;
        }, this)}
        < Button
          bsSize="large"
          onClick={this.clearHotlist}><
          Glyphicon
          glyph="thumbs-up"/> {this.props.clear}</
          Button >
      </div>
    );
  }
}
;


HotList.defaultProps = {
  clear: 'Clear Hotlist'
};

const mapStateToProps = (state) => ({
  ...state.hotOrNot
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(HotListActionCreators, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(HotList);
