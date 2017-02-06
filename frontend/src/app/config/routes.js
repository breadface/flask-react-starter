import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from '../components/example/App'
import Home from '../components/example/Home'
import Post from '../components/example/Post'
import About from '../components/example/About'
import NoMatch from '../components/example/common/NoMatch'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/post" component={Post} />
      <Route path="/about" component={About} />
    </Route>
    <Route path="*"  component={NoMatch} />
  </Router>
)
