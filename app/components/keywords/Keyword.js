import React, {Component} from 'react';
import css from './Keywords.local.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addKeyword} from '../searchbar/MovieSelectDucks';

class Keyword extends Component {
  constructor(props){
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(){
    this.props.addKeyword({
      label: this.props.name,
      value: this.props.id
    })
  }

  render(){
    let {left, top, name} = this.props;
    return (
      <div
        className={css.keywordCircle}
        style={{position:'absolute', left, top}}
        onClick={this.onButtonClick}
      >
        {name}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({addKeyword}, dispatch)
};

export default connect(null, mapDispatchToProps)(Keyword);
