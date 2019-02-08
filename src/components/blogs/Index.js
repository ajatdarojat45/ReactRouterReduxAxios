import React from "react";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import List from '../../containers/blogs/List';


const Index = () => {
  return (
    <div>
      <Link to='/'>Dashboard</Link>
      <BrowserRouter>
      <Switch>
      <Route exact path="/blog" component={List}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Index;
