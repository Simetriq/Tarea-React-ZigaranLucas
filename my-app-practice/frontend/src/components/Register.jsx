import { useState } from 'react';
import { register } from '../services/realApi';

const Register = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await register(email, password);
      setSuccess(response.message);
      setTimeout(() => {
        onNavigate('login');
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex-center">
      <div className="card">
        <h2 className="text-2xl font-bold text-center mb-6">Registrarse</h2>
        
        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}

        {success && (
          <div className="alert alert-success">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Contraseña:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
              minLength="6"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-success"
          >
            {loading ? 'Cargando...' : 'Registrarse'}
          </button>
        </form>

        <p className="text-center mt-4">
          ¿Ya tienes cuenta?{' '}
          <button 
            onClick={() => onNavigate('login')}
            className="btn-link"
          >
            Inicia sesión aquí
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;