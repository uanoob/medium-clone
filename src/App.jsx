import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './pages/routes';
import TopBar from './components/TopBar';
import { CurrentUserProvider } from './contexts/currentUser';

const App = () => (
  <CurrentUserProvider>
    <Router>
      <TopBar />
      <Routes />
    </Router>
  </CurrentUserProvider>
);

export default App;
