import { useState, useEffect, createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import api from 'api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  console.log(history);

  useEffect(() => {
    const token = Cookies.get('tipay_token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
    if (!token) {
      setAuthenticated(false);
    }

    setLoading(false);
  }, []);

  async function handleLogin(email, password) {
    const response = await api.post('stores/sign_in.json', {
      store: { email, password, id_partner: 1 }
    });

    const { token } = response.data;

    const inTenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000);
    Cookies.set('tipay_token', token, {
      expires: inTenMinutes
    });
    api.defaults.headers.Authorization = `Bearer ${token}`;

    if (history.location.state.ref) {
      setAuthenticated(true);
      history.push(history.location.state?.ref);
    } else {
      setAuthenticated(true);
      history.push('/dashboard');
    }
  }

  function handleLogout() {
    Cookies.remove('tipay_token');
    setAuthenticated(false);
  }

  function handleUnauthorized() {
    Cookies.remove('tipay_token');
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        loading,
        setLoading,
        handleLogin,
        handleLogout,
        handleUnauthorized
      }}
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
