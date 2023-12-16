import { Environment } from '../../../environment';
import { Api } from '../axios';


interface IListagemProduto {
  id: number,
  nome: string,
  valor: number,
  validade: string,
  descricao: string
  
}

interface IDetalheProduto {
  id: number,
  nome: string,
  valor: number,
  validade: string,
  descricao: string
  
}

type  TProdutosComTotal = {
  data: IListagemProduto [];
  totalCount: number
  
}
const getAll = async (page = 1, filter=''): Promise<TProdutosComTotal | Error> => {
  try{
    const urlRelativa = `/produtos?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
    const { data } = await Api.get(urlRelativa);

    if( data ){
      return{
        data,
        totalCount: Number(Environment.LIMITE_DE_LINHAS),
      };
    }

    return new Error('Falha ao buscar os dados');
  }catch (erros){
    console.log(erros);
    return new Error((erros as {message: string}).message || 'Falha ao buscar os dados');
  }
};

const getById = async (id: number): Promise<IDetalheProduto | Error> => {
  try{
    
    const { data } = await Api.get(`/produtos/${id}`);

    if( data ){
      return data;
    }

    return new Error('Falha ao consultar os dados');
  }catch (erros){
    console.log(erros);
    return new Error((erros as {message: string}).message || 'Falha ao buscar os dados');
  }
};

const create = async (dados: Omit<IDetalheProduto, 'id'>): Promise<number | Error> => {
  try{
    
    const { data } = await Api.post<IDetalheProduto>('/produtos', dados);

    if( data ){
      return data.id;
    }
    
    return new Error('Error ao criar o registro');
  }catch (erros){
    console.log(erros);
    return new Error((erros as {message: string}).message || 'Falha ao criar os dados');
  }
};

const updateById = async (id : number, dados: IDetalheProduto): Promise<void | Error> => {
  try{
    
    await Api.put<IDetalheProduto>(`/produtos/${id}`, dados);

  }catch (erros){
    console.log(erros);
    return new Error((erros as {message: string}).message || 'Falha ao atualizar os dados');
  }
};

const deleteById  = async (id : number): Promise<void | Error> => {
  try{
    
    await Api.delete(`/produtos/${id}`);

  }catch (erros){
    console.log(erros);
    return new Error((erros as {message: string}).message || 'Falha ao apagar os dados');
  }
};




export const Produtos = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,

};