import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Blog from './components/blogs/Index';
import Podcast from './components/podcasts/Index';
import Dashboard from './components/Dashboard';

import allReducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers, applyMiddleware(thunk));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/podcast" component={Podcast}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
