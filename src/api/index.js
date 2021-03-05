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

export const sendMessageSupport = async (lead) => {
  const config = {
    method: 'post',
    url: 'https://api.tipay.app/v1/leads.json',
    headers: {},
    data: lead
  };
  const response = await api(config);

  return response.data;
};

export const updateProfileInfo = async (data) => {
  const config = {
    method: 'patch',
    url: 'https://api.tipay.app/v1/store/profile.json',
    headers: {},
    data: data
  };
  const response = await api(config);

  return response.data;
};
