import axios from 'axios';
import { useStateContext } from './context/ContextProvidor';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    try {
      const { response } = error;
      if (response.status === 401) {
        localStorage.removeItem('ACCESS_TOKEN');
        const { SetNotification } = useStateContext();
        SetNotification("You are not authorized to obtain the data", "danger");
      }
    } catch (error) {
      console.error(error);
      console.error('An error occurred:', error);
      console.error('Error message:', error.message);
      console.error('Error code:', error.code);
      console.error('Response status:', error.response.status);
      console.error('Response status text:', error.response.statusText);



    }
    throw error;
  }
);

export default axiosClient;