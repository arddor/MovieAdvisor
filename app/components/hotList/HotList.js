import React, {Component} from 'react';
import {ButtonToolbar, Button, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import css from './HotList.css';
class HotList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hotlist = this.props.hotlist.map(item => {
      return <h5>{item}</h5>;
    });
    return (
      <div className="hotList">
        <h3>Your HOT List</h3>
        {hotlist}
      </div>
    );
  }
};


HotList.defaultProps = {
  hot: 'Hot',
  not: 'Not'
};

const mapStateToProps = (state) => ({
  ...state.hotOrNot
});

export default connect(mapStateToProps)(HotList);
