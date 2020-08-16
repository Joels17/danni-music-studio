import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';
import AdminPage from '../components/AdminPage';
import AddNotePage from '../components/AddNotePage';
import EditNotePage from '../components/EditNotePage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={AboutPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/addNote" component={AddNotePage} />
        <Route path="/edit/:id" component={EditNotePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;