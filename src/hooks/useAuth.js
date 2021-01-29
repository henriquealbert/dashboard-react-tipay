import { useState, createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import api from 'api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const history = useHistory();

  async function handleLogin(email, password) {
    try {
      const response = await api.post('stores/sign_in.json', {
        store: { email, password, id_partner: 1 }
      });

      const { token } = response.data;

      const inTenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000);
      Cookies.set('tipay_token', token, {
        expires: inTenMinutes
      });

      api.defaults.headers.Authorization = `Bearer ${token}`;
      setUser({ ...response.data, password });

      if (history.location.state === undefined) {
        setAuthenticated(true);
        history.push('/dashboard');
      } else {
        setAuthenticated(true);
        history.push(history.location.state?.ref);
      }
    } catch (e) {
      return e;
    }
  }

  function handleLogout() {
    Cookies.remove('tipay_token');
    setAuthenticated(false);
  }

  function handleUnauthorized() {
    if (user) {
      handleLogin(user?.email, user?.password);
      console.log('rodou');
    }
    if (!user) {
      handleLogout();
    }
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
        handleUnauthorized,
        user,
        setUser
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
