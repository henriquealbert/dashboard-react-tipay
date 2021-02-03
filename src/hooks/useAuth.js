import { useState, createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import api from 'api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  async function handleLogin(email, password) {
    try {
      const response = await api.post('stores/sign_in.json', {
        store: { email, password, id_partner: 1 }
      });

      if (response.status !== 200) {
        throw response;
      }

      const token = response?.data?.token;

      Cookies.set('tipay_token', token, { expires: 7 });

      api.defaults.headers.Authorization = `Bearer ${token}`;

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

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        loading,
        setLoading,
        handleLogin,
        handleLogout
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
