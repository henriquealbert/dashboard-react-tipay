import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from 'api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const history = useHistory();
  console.log(history);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
      setUser(token);
    }

    setLoading(false);
  }, []);

  async function handleLogin(email) {
    // fazer chamada pra api para pegar o token e substituir aqui essa variavel.
    const token = { email };
    // fazer chamada pra api para pegar o token e substituir aqui essa variavel.

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    setUser(token);
    history.push('/');
  }

  function handleLogout() {
    setAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }

  return { authenticated, loading, handleLogin, handleLogout, user, setUser };
}
