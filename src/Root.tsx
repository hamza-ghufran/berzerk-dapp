import React from 'react';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './app';

configure({
  enforceActions: 'observed',
});

const Root: React.FC = () => {
  return (
    <Provider store={{}}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

export default Root;