import React from 'react';
import { render } from 'react-dom';
import routes from './config/routes';
import "styles/index.scss"

render(
  routes,
  document.getElementById('root')
)
