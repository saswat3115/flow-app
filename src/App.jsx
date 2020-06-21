import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
// import logo from './logo.svg';
import Header from './components/header/header';
import Login from './pages/login/login';
import './App.css';
import Home from './pages/home/home';
import Flows from './pages/flows/flows';

const router = [
  { path: '/', component: Login },
  { path: '/home', component: Home },
  { path: '/flow/:id', component: Flows }
];

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        {router.map((item, index) => (
          <Route
            key={index}
            exact
            path={item.path}
            component={item.component}
          />
        ))}
      </Switch>
    </div>
  );
}

export default withRouter(App);
