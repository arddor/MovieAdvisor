import React from 'react';

import css from './HotOrNot.css';
import {ButtonToolbar, Button, Glyphicon} from 'react-bootstrap';
import PubSub from 'pubsub-js';

const HotOrNot = React.createClass({
  onNotClicked(event) {
    console.log("current movieid is " + this.props.movieID);
    console.log("on Not Clicked"); // React Component instance

    //TODO add to notshowagain list
  },
  onHotClicked(){
    console.log("onHotClicked");
    var randomID = this.randomIDGenerator();
    console.log("add movie with id " + randomID + " to HOT List");
    PubSub.publish('onMovieAddedToHotList', randomID);

    //store.dispatch
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
          <Button bsSize="large" onClick={this.onHotClicked}><Glyphicon glyph="thumbs-up"/> {this.props.hot}</Button>
          <Button bsSize="large" onClick={this.onNotClicked}><Glyphicon glyph="thumbs-down"/> {this.props.not} </Button>
        </ButtonToolbar>
      </div>
    );
  },

  randomIDGenerator  (){
    return Math.floor((Math.random() * 1000) + 1);
  }
});

export default HotOrNot;
