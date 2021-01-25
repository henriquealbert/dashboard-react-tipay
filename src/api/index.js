import axios from 'axios';
import Cookie from 'js-cookie';

const token = Cookie.get('tipay_token');

const api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export default api;
