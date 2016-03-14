import React from 'react';

import css from './Hello.local.css';

const Hello = props => {
  return (
    <h1 className={css.div}>{props.text}</h1>
  );
};

Hello.defaultProps = {
  text: 'Hello World'
};

export default Hello;
