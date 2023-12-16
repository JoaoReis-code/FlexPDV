import { AxiosError } from 'axios';

export const errosInterceptor = (erros: AxiosError) => {

  if(erros.message === 'Network Error'){
    return Promise.reject(new Error('Erro de conexão'));
  }

  if(erros.response?.status === 401){
    //aaa
  }

  return Promise.reject(erros);
};