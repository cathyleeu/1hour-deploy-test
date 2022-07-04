import axios, { AxiosInstance } from 'axios';

const customAxios: AxiosInstance = axios.create({
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
  baseURL: 'https://one-hour-server.herokuapp.com/',
});

export default customAxios;
