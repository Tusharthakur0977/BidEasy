import Axios, { AxiosRequestConfig } from 'axios';

export const client = Axios.create({
  baseURL: '',
});

function authRequestInterceptor(config: AxiosRequestConfig) {
  //   const encodedToken = storage.getToken();
  //   if (encodedToken) {
  //     config.params = { ...config.params };
  //   }
  if (config.headers) {
    config.headers = {
      ...config.headers,
      Accept: 'application/json',
      //   token: encodedToken,
    };
  }
  return config;
}

client.interceptors.request.use(authRequestInterceptor as never);
client.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
