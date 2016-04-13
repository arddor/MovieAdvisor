import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {add} from './HelloDucks';

import css from './Hello.local.css';

class Hello extends Component {
  render() {
    const list = this.props.list.map(item => {
      return <h1>item</h1>;
    });

    return (
      <div>
        <h1 className={css.div}>{this.props.name}</h1>
        <button onClick={this.props.add}>ADD NEW</button>
        {list}
        <input type="text"/>
      </div>
    );
  }
};

Hello.defaultProps = {
  text: 'Hello World'
};

const mapStateToProps = (state) => ({
  ...state.hello
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({add}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
