import React from 'react';

import './App.scss';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        This is header
      </header>
      <main className="app__main">
        <Login />
      </main>
      <footer className="app__footer">
        This is footer
      </footer>

    </div>
  );
}

export default App;
