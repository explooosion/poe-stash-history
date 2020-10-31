import axios from 'axios';
import { removeSessionId } from '../services/Auth';

const restApi = axios.create();

restApi.interceptors.request.use(response => {
  return response;
});

restApi.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) await removeSessionId();
    return error;
  }
);

export { restApi };
