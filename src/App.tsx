import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';
import { CreateUser } from './commponents/CreateUser';
import { Users } from './commponents/Users';
import './_App.scss';

const App = () => (
  <div className="app">
    <Layout>
      <Switch>
        <Route path="/" component={Users} exact />
        {/* <Route path="/user/:id" component={UserPage} /> */}
        <Route path="/create-user" component={CreateUser} />
      </Switch>
    </Layout>
  </div>
);

export default App;
