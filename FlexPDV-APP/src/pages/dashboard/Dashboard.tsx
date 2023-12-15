import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';


export const Dashboard = () => {

  return(
    <LayoutBase titulo="Dashboard" 
      barraDeFerramentas={(
        <FerramentasDeDetalhe
          
        />
      )}>
        teste
    </LayoutBase>
  );
};