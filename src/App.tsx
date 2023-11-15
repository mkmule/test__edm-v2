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
  const [view, setView] = useState(View.Login)
  const [userType, setUserType] = useState<string>()

  const handleLoginSuccess = (userType: string) => {
    setView(View.Dashboard);
    setUserType(userType);
  };

  return (
    <div className="app">
      <header className="app__header">
        Amazing brand logo here
      </header>
      <main className="app__main">
        {view === View.Login && <Login handleLoginSuccess={handleLoginSuccess} />}
        {view === View.Dashboard && <Dashboard userType={userType} />}
      </main>
      <footer className="app__footer">
        Copyright, contacts and Privacy policy
      </footer>
    </div>
  );
}

export default App;
