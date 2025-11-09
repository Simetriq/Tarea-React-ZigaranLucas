import { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setCurrentView('home');
    }
  }, []);

  const navigate = (view) => {
    setCurrentView(view);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    setCurrentView('login');
  };

  const renderView = () => {
    switch (currentView) {
      case 'login':
        return <Login onLogin={handleLogin} onNavigate={navigate} />;
      case 'register':
        return <Register onNavigate={navigate} />;
      case 'home':
        return isAuthenticated ? 
          <Home onLogout={handleLogout} /> : 
          <Login onLogin={handleLogin} onNavigate={navigate} />;
      default:
        return <Login onLogin={handleLogin} onNavigate={navigate} />;
    }
  };

  return (
    <div className="App">
      {renderView()}
    </div>
  );
}

export default App;