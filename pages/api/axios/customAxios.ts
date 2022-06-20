import axios from 'axios';

const customAxios = axios.create({
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default customAxios;
