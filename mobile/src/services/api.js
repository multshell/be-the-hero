import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.2.0.21:3333'
});

export default api;