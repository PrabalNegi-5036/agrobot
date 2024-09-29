import React from 'react';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Chatbot from './components/chat/Chatbot1';
import AdminPanel from './components/admin/AdminPanel';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/pages/Navbar';
import LandingPage from './components/pages/Landing';


function App() {
  return (
    <AuthProvider>
      <Router>
      <Navbar/>
        <Routes>
          
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
