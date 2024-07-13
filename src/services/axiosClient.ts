import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { resetLocalStorage } from '../Utils/Helpers';

export const client = Axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

function authRequestInterceptor(config: AxiosRequestConfig) {
  // const encodedToken = storage.getToken();
  // if (encodedToken) {
  //   config.params = { ...config.params };
  // }
  if (config.headers) {
    config.headers = {
      ...config.headers,
      Accept: 'application/json',
      // token: encodedToken,
    };
  }
  return config;
}

// Function to perform on 401 error
const handle401Error = () => {
  // Perform the specific function here, e.g., redirect to login page or refresh token
  console.log('401 Unauthorized - Handling the error');
  // For example, you can redirect to login page:
  // resetLocalStorage();
  // window.location.href = '/auth/signin';
};

client.interceptors.request.use(authRequestInterceptor as never);
client.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 404)
    ) {
      handle401Error();
    }
    return Promise.reject(error);
  }
);
