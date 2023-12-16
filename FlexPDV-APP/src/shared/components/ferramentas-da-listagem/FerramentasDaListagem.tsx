import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';
import { Environment } from '../../environment';

interface IFerramentasDaListagemProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotao?: string,
  mostrarBotao?: boolean;
  aoCliciarNoBotao?:() => void;
}



export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  textoBotao = 'Novo',
  aoCliciarNoBotao,
  mostrarBotao = true,
}) => {
  const theme = useTheme();

  return(
    <Box height={theme.spacing(5)} gap={1.5} marginX={0.8} padding={0.5} paddingX={1} display="flex" alignItems="center" component={Paper}>
      <Icon>search</Icon>
      {mostrarInputBusca && (
        <TextField size="small" placeholder={Environment.INPUT_DE_BUSCA} value={textoDaBusca} 
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotao &&(
          <Button variant='contained' color='primary' onClick={aoCliciarNoBotao}>
            {textoBotao}
          </Button>
        )}
      </Box>
    </Box>
  );
};