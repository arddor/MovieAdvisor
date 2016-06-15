import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

import css from './SideButton.local.css';

class SideButton extends Component {
  constructor(props){
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {
      open: false
    }
  }

  onButtonClick(){
    this.setState({ open: !this.state.open });
  }

  render(){
    let slideOut = null;
    let slideOutCss = null;
    let inner = null;
    let innerCss = null;

    if(this.props.position == 'left'){
      slideOut = this.state.open ? {left: '25%'} : {left: 0};
      slideOutCss = css.slideoutLeft;
      inner = this.state.open ? {left: 0} : {left: '-25%'};
      innerCss = css.innerLeft;
    } else if(this.props.position == 'right'){
      slideOut = this.state.open ? {right: '25%'} : {right: 0};
      slideOutCss = css.slideoutRight;
      inner = this.state.open ? {right: 0} : {right: '-25%'};
      innerCss = css.innerRight;
    }
    return (
      <div className={slideOutCss} style={slideOut}>
        <Button
          className={css.button}
          onClick={this.onButtonClick}
        >{this.props.button}</Button>
        <div
          className={innerCss} style={inner}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

SideButton.defaultProps = {
  position: 'left'
};

export default SideButton;
