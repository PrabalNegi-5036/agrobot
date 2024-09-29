import axios from 'axios';

const API_URL = 'https://agrobot-bp38.vercel.app/api/nlu';

const processNLU = (query) => {
  return axios.post(API_URL, { query });
};

export default { processNLU };