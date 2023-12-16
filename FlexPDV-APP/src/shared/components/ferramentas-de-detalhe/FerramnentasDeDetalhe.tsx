import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';

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
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return(
    <Box height={theme.spacing(5)} gap={1.5} marginX={0.8} padding={0.5} paddingX={1} display="flex" alignItems="center" component={Paper}>
      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) &&(
        <Button variant='contained' color='primary' onClick={aoClicarEmNovo} startIcon={<Icon>add</Icon>}>
          <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
            {textoBotaoNovo}
          </Typography>  
        </Button>
      )}

      {(mostrarBotaoSalvarCarregando && !smDown) &&(
        <Skeleton width={110} height={36}/>
      )}
     
      {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) &&(
        <Button variant='contained' color='primary' onClick={aoClicarEmSalvarEFechar} startIcon={<Icon>save</Icon>}>
          <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
            Salvar e fechar
          </Typography>  
        </Button>
      )}

      {(mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) &&(
        <Skeleton width={180} height={36}/>
      )}

      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) &&(
        <Button variant='contained' color='primary' onClick={aoClicarEmSalvar} startIcon={<Icon>save</Icon>}>
          <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
            Salvar
          </Typography>  
        </Button>
      )}

      {mostrarBotaoSalvarCarregando &&(
        <Skeleton width={110} height={36}/>
      )}

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) &&(
        <Button variant='contained' color='primary' onClick={aoClicarEmApagar} startIcon={<Icon>delete_outlined</Icon>}>
          <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
            Apagar
          </Typography>  
        </Button>
      )}

      {mostrarBotaoApagarCarregando &&(
        <Skeleton width={110} height={36}/>
      )}

      {mostrarBotaoVoltar &&(
        <Divider variant='middle' orientation='vertical'/>
      )}

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) &&(
        <Button variant='contained' color='primary' onClick={aoClicarEmVoltar} startIcon={<Icon>arrow_back</Icon>}>
          <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
            Voltar
          </Typography>  
        </Button>
      )}

      {mostrarBotaoVoltarCarregando &&(
        <Skeleton width={110} height={36}/>
      )}

    </Box>
  );
};