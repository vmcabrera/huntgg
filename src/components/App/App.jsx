import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../routes';

import AppWrapper from '../AppWrapper/AppWrapper';
import { ResponsiveContext } from '../../providers/context';
import useResolution from '../../hooks/useViewport';

import './App.css';

function App() {
  const resolution = useResolution();

  const routeComponents = routes.map((route) => {
    return <Route key={route.key} {...route} />;
  });

  return (
    <ResponsiveContext.Provider value={{ resolution }}>
      <AppWrapper>
        <Switch>
          {routeComponents}
          <Redirect to="/" />
        </Switch>
      </AppWrapper>
    </ResponsiveContext.Provider>
  );
}

export default App;
