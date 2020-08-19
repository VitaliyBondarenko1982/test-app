import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from './Layout';
import { CreateUser } from './commponents/CreateUser';
import { Users } from './commponents/Users';
import 'materialize-css';
import './_App.scss';

const App = () => (
  <div className="app">
    <Layout>
      <Switch>
        <Route path="/" component={Users} exact />
        <Route path="/users/:page" component={Users} />
        <Route path="/create-user" component={CreateUser} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  </div>
);

export default App;
