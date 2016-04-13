import React from 'react';

import css from './HotList.css';
import {ButtonToolbar, Button, Glyphicon} from 'react-bootstrap';
import PubSub from 'pubsub-js';


const HotList = React.createClass({
  onMovieClicked(){
    console.log("clicked on movie in movielist. open it in viewer");
  },
  getDefaultProps() {
    return {
      hot: 'Hot',
      not: 'Not'
    };
  },

  mySubscriber: function (event,data) {
    console.log('movie to add to list: ' + data);
  },

  componentDidMount: function () {
    var token = PubSub.subscribe('onMovieAddedToHotList', this.mySubscriber);

  },
  componentWillUnmount: function () {
   //TODO unsubscribe to event onMovieAddedToHotList
  },

  render() {


    return (
      <div className="hotList">
        <h3>Your HOT List</h3>
      </div>
    );
  },

  randomIDGenerator  (){
    return Math.floor((Math.random() * 1000) + 1);
  }
});

export default HotList;
