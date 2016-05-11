import React from 'react';

import css from './Keywords.local.css';

export default class Keyword extends React.Component {
  render() {
    const list = ['a', 'b', 'c', 'd', 'e'];
    var radius = 200; //radius
    var pi = Math.PI;
    var n = list.length;

    var elements = [];

    for (var i = 0; i < n; i++) {
      var l =500 + radius*Math.cos(2*i*pi/n);
      var r =400 + radius*Math.sin(2*i*pi/n);
      elements.push(<button className="btn btn-Lg btn-primary" style={{position: 'absolute', left: l, top: r}}>{list[i]}</button>);
    }







    return(
      <div id="keyword-circle">

        {elements}

      </div>
    );
  }
}
