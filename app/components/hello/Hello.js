import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {add} from './HelloDucks';

import css from './Hello.local.css';

class Hello extends Component {

  constructor(props){
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress(){
    this.props.add('abc');
  }

  render() {
    const list = this.props.list.map(item => {
      return <h1>{item}</h1>;
    });

    return (
      <div>
        <h1 className={css.div}>{this.props.name}</h1>
        <button onClick={this.onButtonPress}>ADD NEW</button>
        {list}
        <input type="text"/>
      </div>
    );
  }
>>>>>>> searchbar
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
