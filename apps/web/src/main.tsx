import React from 'react';
import { render } from 'react-dom';

import App from './app/app.component';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
