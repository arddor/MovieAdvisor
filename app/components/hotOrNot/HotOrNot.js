import React from 'react';

import css from './HotOrNot.css';
import {ButtonToolbar, Button, Glyphicon} from 'react-bootstrap';


/*
class HotOrNot extends React.Component {

  constructor(props) {
    super(props);
  }
  handleClick() {
    console.log(this); // null
  }
  render = props => {
    return (
      <div className="hotOrNot">
        <ButtonToolbar>
          <Button bsSize="large" onClick="this.handleClick"><Glyphicon glyph="thumbs-up"/> {props.hot}</Button>
          <Button bsSize="large" onClick="this.handleClick"><Glyphicon glyph="thumbs-down"/> {props.not}</Button>
        </ButtonToolbar>
      </div>
    );
  }
}
HotOrNot.defaultProps = {
  hot: 'Hot',
  not: 'Not'
};
export default HotOrNot;
*/

const HotOrNot = React.createClass({
  onNotClicked(event) {
    console.log("on Not Clicked"); // React Component instance
    //TODO add to notshowagain list
  },
  onHotClicked(){
    console.log("onHotClicked");
    //add to hot list on the left
  },
  getDefaultProps() {
    return {
      hot: 'Hot',
      not: 'Not'
    };
  },

  render() {
    return (
      <div className="hotOrNot">
        <ButtonToolbar>
          <Button bsSize="large" onClick={this.onHotClicked}><Glyphicon glyph="thumbs-up"/>  {this.props.hot}</Button>
          <Button bsSize="large" onClick={this.onNotClicked}><Glyphicon glyph="thumbs-down"/> {this.props.not} </Button>
        </ButtonToolbar>
      </div>
    );
  }
});

export default HotOrNot;
