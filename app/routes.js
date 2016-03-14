import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import NavigationLayout from './layout/NavigationLayout';

import HomeView from './views/HomeView';

export default store => {

  return (
    <Route path='/' component={NavigationLayout}>
      <IndexRoute component={HomeView}/>
    </Route>
  );

}
