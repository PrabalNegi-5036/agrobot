import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/AuthService';
import { AuthContext } from '../../context/AuthContext';
import './auth.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await authService.login(username, password);
      setAuth({ token: response.data.token, role: response.data.role });
      if (response.data.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/chatbot');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
