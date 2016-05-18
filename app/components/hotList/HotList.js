import React, {Component} from 'react';
import {Row, Col, Image, Button, Glyphicon, ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import hotlistcss from './HotList.local.css';
import * as HotListActionCreators from '../hotOrNot/HotOrNotDucks';

class HotList extends Component {
  constructor(props) {
    super(props);
    this.clearHotlist = this.clearHotlist.bind(this);
    this.remove = this.remove.bind(this);
    this.showMovie = this.showMovie.bind(this);
  }

  clearHotlist() {
    this.props.clearHotlist();
  }

  remove(index) {
    this.props.removeFromHotlist(index);
  }

  showMovie(index) {
    console.log("show");
  }

  render() {
    var results = this.props.hotlist;
    const title = (
      <h1>Your Hotlist <
        Glyphicon
        glyph="fire"/></h1>
    );
    return (
      <div className={hotlistcss.hotlist}>
        <Panel header={title} className={hotlistcss.panelMovie}>
          <div className={hotlistcss.hotlistbody}>
            <ListGroup >
              {results.map(function (result, index) {
                return <ListGroupItem><Row className={hotlistcss.hotlistitem} key={result.id}>
                  <div onClick={() => this.showMovie(result.id)}><Col md={5}><Image responsive
                                                                                    src={"http://image.tmdb.org/t/p/w300"+result.backdrop_path}/></Col>
                    <Col md={5}> {result.original_title}
                    </Col></div>
                  <Col md={2}><Button onClick={() => this.remove(index)} bsSize="xsmall">
                    <Glyphicon
                      glyph="trash"/></Button></Col>
                </Row></ListGroupItem>;
              }, this)}
            </ListGroup>
          </div>
          < Button
            bsSize="large"
            onClick={this.clearHotlist}><
            Glyphicon
            glyph="trash"/> {this.props.clear}</
            Button >

        </Panel>
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
