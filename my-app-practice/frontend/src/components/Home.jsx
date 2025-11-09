import { useState, useEffect } from 'react';
import { getProfile } from '../services/realApi';

const Home = ({ onLogout }) => {
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProfile = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        onLogout();
        return;
      }

      try {
        const response = await getProfile(token);
        setUserEmail(response.user.email);
      } catch (err) {
        setError(err.message);
        onLogout();
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [onLogout]);

  if (loading) {
    return (
      <div className="min-h-screen flex-center">
        <div className="text-xl">Cargando perfil...</div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="container">
        <div className="home-header">
          <h1 className="text-3xl font-bold text-gray-800">
            Bienvenido, {userEmail}
          </h1>
          <button
            onClick={onLogout}
            className="btn btn-danger"
            style={{ width: 'auto' }}
          >
            Cerrar Sesión
          </button>
        </div>
        
        {error && (
          <div className="alert alert-error">
            Error: {error}
          </div>
        )}
        
        <div className="home-content">
          <p>¡Has iniciado sesión exitosamente! Esta es tu página principal.</p>
          <p style={{ marginTop: '0.5rem' }}>
            Token almacenado: {localStorage.getItem('token') ? '✅' : '❌'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;