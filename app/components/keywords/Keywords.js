import React from 'react';

import css from './Keywords.local.css';

export default class Keyword extends React.Component {
  render() {
    const list = ['a', 'b', 'c'];
    var r = 200; //radius
    var pi = Math.PI;
    var n = list.length;

    

/////(x + r cos(2kπ/n), y + r sin(2kπ/n))


    return(
      <div id="keyword-circle">

        <div className="field" style={{position: 'absolute', left: '500px', top: '300px'}}>3</div>


      </div>
    );
  }
}
