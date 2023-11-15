import React, { useState } from 'react';

import './App.scss';
import Login from './pages/Login/Login';

enum View {
  Login,
  Dashboard,
}

function App() {
  // Ideally we will use react-router
  const [view, setView] = useState(View.Login)


  const handleLoginSuccess = () => {
    setView(View.Dashboard);
  };

  return (
    <div className="app">
      <header className="app__header">
        This is header
      </header>
      <main className="app__main">
        {view === View.Login && <Login handleLoginSuccess={handleLoginSuccess} />}
        {view === View.Dashboard && <p>Dashboard page</p>}
      </main>
      <footer className="app__footer">
        This is footer
      </footer>

    </div>
  );
}

export default App;
