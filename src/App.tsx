import React, { useState } from 'react';

import './App.scss';
import Login from './pages/Login/Login';
import { Dashboard } from './pages/Dashboard/Dashboard';

enum View {
  Login,
  Dashboard,
}

function App() {
  // Ideally we will use react-router
  const [view, setView] = useState(View.Dashboard)


  const handleLoginSuccess = () => {
    setView(View.Dashboard);
  };

  return (
    <div className="app">
      <header className="app__header">
        Amazing brand logo here
      </header>
      <main className="app__main">
        {view === View.Login && <Login handleLoginSuccess={handleLoginSuccess} />}
        {view === View.Dashboard && <Dashboard />}
      </main>
      <footer className="app__footer">
        Copyright, contacts and Privacy policy
      </footer>
    </div>
  );
}

export default App;
