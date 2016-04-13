
import React from 'react';

export default class Youtube extends React.Component {
  render() {
    //const url = "http://www.youtube.com/embed/XGSy3_Czz8k?autoplay=1?autohide=1";
    const url = "http://www.youtube.com/embed/XGSy3_Czz8k?autoplay=1?autohide=1";
    return(
      <div>
        <iframe width="420" height="315" src = {url}> </iframe>
      </div>
    );
  }
}
