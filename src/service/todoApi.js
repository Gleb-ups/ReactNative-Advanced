import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  responseType: 'json',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
