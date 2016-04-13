import React from 'react';

import Hello from '../components/hello';
import Youtube from '../components/youtube';

const HomeView = props => {
  return (
    <div>
      <Hello text="Welcome to Movie Advisor" />
      <Youtube />
    </div>
  );
};

export default HomeView;
