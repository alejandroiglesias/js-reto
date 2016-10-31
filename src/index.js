import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRedirect, Route, Router, browserHistory} from 'react-router';
import {Provider} from 'mobx-react';
import {observable} from 'mobx';

import {Main} from './app/main';
import ProductList from './app/products/product-list';

import './index.scss';

const products = observable([]);
window.products = products;

ReactDOM.render(
  <Provider products={products}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRedirect to="/products"/>
        <Route path="products" component={ProductList}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
