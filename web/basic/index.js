import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory } from 'react-router';  // 3.2.0
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Test3 from './test_3';
import Test4 from './test_4';
/* 3.2.0 */
// ReactDOM.render(
//   <Router history = { browserHistory }>
//     <Route path = '/test/3' component = { Test3 } />
//     <Route path = '/test/4' component = { Test4 } />
//   </Router>
// , document.getElementById('app'));

const Test1 = Loadable({
  loader: () => import('./test_1' /* webpackChunkName: "test_1" */ /* webpackMode: "lazy" */),
  loading: () => <div>loading</div>,
});

const Test2 = Loadable({
  loader: () => import('./test_2' /* webpackChunkName: "test_2" */ /* webpackMode: "lazy" */),
  loading: () => <div>loading</div>,
});

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path = '/test/1' component = { Test1 } />
      <Route path = '/test/2' component = { Test2 } />
    </Switch>
  </Router>
, document.getElementById('app'));
