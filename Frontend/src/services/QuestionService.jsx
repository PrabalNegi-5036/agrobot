import axios from "axios";

const API_URL = "https://agrobot-bp38.vercel.app/api/questions";

const getQuestions = () => {
  return axios.get(API_URL);
};

const addQuestion = (question, answer) => {
  return axios.post(API_URL, { question, answer });
};

const updateQuestion = (id, question, answer) => {
  return axios.put(API_URL + `/${id}`, { question, answer });
};

const deleteQuestion = (id) => {
  return axios.delete(API_URL + `/${id}`);
};

export default { getQuestions, addQuestion, updateQuestion, deleteQuestion };
