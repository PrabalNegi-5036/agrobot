import axios from 'axios';

const API_URL = 'http://localhost:8080/api/nlu';

const processNLU = (query) => {
  return axios.post(API_URL, { query });
};

export default { processNLU };