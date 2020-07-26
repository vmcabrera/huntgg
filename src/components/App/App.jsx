import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Switch>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
