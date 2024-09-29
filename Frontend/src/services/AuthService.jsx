import axios from 'axios';

const API_URL = 'https://agrobot-bp38.vercel.app/api/auth';

const login = (username, password) => {
  return axios.post(API_URL + '/login', { username, password });
};

const signup = (username, password) => {
  return axios.post(API_URL + '/signup', { username, password });
};

export default { login, signup };
