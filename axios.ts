import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

import Constants from 'expo-constants';

const {manifest} = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:9000`;

const config: AxiosRequestConfig = {
  baseURL: uri,
};
const client: AxiosInstance = axios.create(config);

export default client;

/* function getbaseUrl() {
  if (process.env.NODE_ENV === 'development') {
    return uri;
  } else if (process.env.NODE_ENV === 'preprod') {
    return 'http://163.172.187.31:9000/';
  } else if (process.env.NODE_ENV === 'preprod_erp') {
    return 'http://212.47.243.63:9000/';
  } else if (process.env.NODE_ENV === 'production') {
    return 'https://api.e-collegedeparis.com/';
  } else if (process.env.NODE_ENV === 'test_e2e') {
    return 'http://node_test:9000/';
  }
} */

/* client.CancelToken = axios.CancelToken;
ajax.isCancel = axios.isCancel;
ajax.defaults.withCredentials = true; */

/*
 * The interceptor here ensures that we check for the token in local storage every time an ajax request is made
 */
/* ajax.interceptors.request.use(
  (config) => {
    try {
      let token = localStorage.getItem('bearerToken');
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    } catch (e) {
      console.error(e);
      return config;
    }
  },

  (error) => {
    return Promise.reject(error);
  },
); */
