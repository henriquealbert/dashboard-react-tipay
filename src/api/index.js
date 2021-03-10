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

export const updateBankAccount = async (values) => {
  const config = {
    method: 'post',
    url: 'https://api.tipay.app/v1/store/bank_account.json',
    headers: {},
    data: { bank_account: values }
  };
  const response = await api(config);

  return response.data;
};

export const createBuyer = async (data) => {
  const config = {
    method: 'post',
    url: 'https://api.tipay.app/v1/buyer.json',
    headers: {},
    data: { buyer: data }
  };

  const response = await api(config);

  return response.data;
};

export const updateBuyer = async (id, data) => {
  if (id) {
    const config = {
      method: 'patch',
      url: `https://api.tipay.app/v1/buyer/id=${id}.json`,
      headers: {},
      data: { buyer: data }
    };

    const response = await api(config);

    return response.data;
  }
};

export const deleteBuyer = async (id) => {
  const config = {
    method: 'delete',
    url: `https://api.tipay.app/v1/buyer/id=${id}.json`,
    headers: {}
  };

  const response = await api(config);

  return response.data;
};

export const buyersFilteredList = async (filteredOption, searchTerm) => {
  const config = {
    method: 'post',
    url: `v1/buyers/search/1.json`,
    headers: {},
    data: {
      buyer: {
        [filteredOption]: searchTerm
      }
    }
  };

  const response = await api(config);

  return response.data;
};

export const sendValidationMessage = async (email) => {
  const config = {
    method: 'post',
    url: `v1/send_validation_message.json`,
    headers: {},
    data: email
  };

  const response = await api(config);

  if (response.status === 200) {
    return response.data;
  }
};

export const resetPassword = async (values) => {
  const config = {
    method: 'post',
    url: `v1/store/reset_password.json`,
    headers: {},
    data: values
  };

  const response = await api(config);

  return response.data;
};

export const createRemoteLink = async (values) => {
  const config = {
    method: 'post',
    url: `v1/link.json`,
    headers: {},
    data: values
  };

  const response = await api(config);

  return response.data;
};

export const calculateValueReceive = async (value, installment_plan) => {
  const config = {
    method: 'get',
    url: `v1/transaction/calculate/value=${value}/installment_plan=${installment_plan}/online=true.json`,
    headers: {}
  };

  const response = await api(config);

  return response.data;
};
