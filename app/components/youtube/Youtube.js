import React from 'react';

const Youtube = props => {
  return(
    <div>
      <iframe type="text/html" width={props.width} height={props.height} src = {props.url} frameborder="0"
              autoplay allowfullscreen> </iframe>
    </div>
  );
};

Youtube.defaultProps = {
  width: "420",
  height: "315",
  url: "http://www.youtube.com/embed/XGSy3_Czz8k?autoplay=1?autohide=1&fs=1"
};

export default Youtube;
