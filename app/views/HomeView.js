import React from 'react';

import Hello from '../components/hello';
import HotOrNot from '../components/hotOrNot';

const HomeView = props => {
  return (
    <div>
      <Hello text="Welcome to Movie Advisor" />
      <HotOrNot />
    </div>
  );
};

export default HomeView;
