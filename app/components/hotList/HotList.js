import React, {Component} from 'react';
import {Row, Col, Image, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import hotlistcss from './HotList.local.css';

class HotList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var results = this.props.hotlist;
    return (
      <div>
        <h5>Your Hotlist</h5>
        {results.map(function (result) {
          return <Row className={hotlistcss.hotlistitem} key={result.id}>
            <Col md={5}><Image responsive src={"http://image.tmdb.org/t/p/w300"+result.backdrop_path}/></Col>
            <Col md={7}> {result.original_title}</Col>
          </Row>;
        })}
      </div>
    );
  }
}
;


HotList.defaultProps = {
  hot: 'Hot',
  not: 'Not'
};

const mapStateToProps = (state) => ({
  ...state.hotOrNot
});

export default connect(mapStateToProps)(HotList);
