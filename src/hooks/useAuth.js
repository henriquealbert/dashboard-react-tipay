import { useState, useEffect, createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from 'api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('@tipay:token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(email, password) {
    const response = await api.post('stores/sign_in.json', {
      store: { email, password, id_partner: 1 }
    });
    const { token } = response.data;

    localStorage.setItem('@tipay:token', token);
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    history.push('/dashboard');
  }

  function handleLogout() {
    api.defaults.headers.Authorization = undefined;
    localStorage.removeItem('@tipay:token');
    setAuthenticated(false);
    history.push('/login');
  }

  return (
    <AuthContext.Provider
      value={{ authenticated, loading, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
