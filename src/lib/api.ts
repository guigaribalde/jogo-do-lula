import axios from 'axios';

const env = process.env.NODE_ENV;
const api = axios.create({
  baseURL:
    env === 'development'
      ? 'http://localhost:3005/'
      : 'https://63442c4adcae733e8fd944fd.mockapi.io/',
});

export default api;
