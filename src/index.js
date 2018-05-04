import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';


import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStore(reducers, composeWithDevTools(applyMiddleware(promise)))}>
    <BrowserRouter>
      <div>
        {/* switch is use to make react router choose the first path it matches, otherwise without switch all the routes are going to be showed simultaneously */}
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));