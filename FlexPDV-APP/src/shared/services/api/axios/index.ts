import axios from 'axios';
import { responseInterceptor, errosInterceptor } from './interceptor';
import { Environment } from '../../../environment';

const Api = axios.create({
  baseURL: Environment.URL_BASE,
});

Api.interceptors.response.use(
  (response) =>  responseInterceptor(response),
  (error) => errosInterceptor(error)
);

export {Api};