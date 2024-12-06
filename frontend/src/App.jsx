import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('accessToken'));

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-base-100">
        <nav className="navbar bg-base-200 p-4 justify-between">
          <span className="text-xl font-bold">Almoxarifado</span>
          {isAuthenticated && (
            <button className="btn btn-error" onClick={handleLogout}>
              Logout
            </button>
          )}
        </nav>
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={!isAuthenticated ? <LoginPage onLoginSuccess={handleLoginSuccess}/> : <Navigate to="/produtos"/>} />
            <Route path="/login" element={!isAuthenticated ? <LoginPage onLoginSuccess={handleLoginSuccess}/> : <Navigate to="/produtos" />} />
            <Route path="/register" element={!isAuthenticated ? <RegisterPage/> : <Navigate to="/produtos" />} />
            <Route path="/produtos" element={isAuthenticated ? <ProductPage/> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
