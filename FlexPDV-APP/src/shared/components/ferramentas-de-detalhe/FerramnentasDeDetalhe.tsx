import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from '@mui/material';

interface IFerramentasDeDetalhe{
  textoBotaoNovo?: string;
  
  mostrarBotaoNovo?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;

  aoClicarEmNovo?: () => void;  
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalhe> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,

}) => {
  const theme = useTheme();

  return(
    <Box height={theme.spacing(5)} gap={1.5} marginX={0.8} padding={0.5} paddingX={1} display="flex" alignItems="center" component={Paper}>
      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) &&(
        <Button variant='contained' color='primary' onClick={aoClicarEmNovo} startIcon={<Icon>add</Icon>}>
          {textoBotaoNovo}
        </Button>
      )}

      {mostrarBotaoSalvarCarregando &&(
        <Skeleton width={110} height={36}/>
      )}
     
      {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando) &&(
        <Button variant='contained' color='primary' onClick={aoClicarEmSalvarEFechar} startIcon={<Icon>save</Icon>}>
          Salvar e Fechar
        </Button>
      )}

      {mostrarBotaoSalvarEFecharCarregando &&(
        <Skeleton width={180} height={36}/>
      )}

      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) &&(
        <Button variant='contained' color='primary' onClick={aoClicarEmSalvar} startIcon={<Icon>save</Icon>}>
          Salvar
        </Button>
      )}

      {mostrarBotaoSalvarCarregando &&(
        <Skeleton width={110} height={36}/>
      )}

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) &&(
        <Button variant='contained' color='primary' onClick={aoClicarEmApagar} startIcon={<Icon>delete_outlined</Icon>}>
          Apagar
        </Button>
      )}

      {mostrarBotaoApagarCarregando &&(
        <Skeleton width={110} height={36}/>
      )}

      <Divider variant='middle' orientation='vertical'/>

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) &&(
        <Button variant='contained' color='primary' onClick={aoClicarEmVoltar} startIcon={<Icon>arrow_back</Icon>}>
          Voltar
        </Button>
      )}

      {mostrarBotaoVoltarCarregando &&(
        <Skeleton width={110} height={36}/>
      )}

    </Box>
  );
};