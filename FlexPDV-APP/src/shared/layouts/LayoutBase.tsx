import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { useDrawerContext } from '../contexts';

interface ILayoutProps {
  children: React.ReactNode;
  titulo: string;
  barraDeFerramentas?: ReactNode;
}

export const LayoutBase: React.FC<ILayoutProps> = ({ children, titulo, barraDeFerramentas }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const { toggleDrawerOpen } = useDrawerContext();
  
  return(
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box padding={1} gap={1} height={theme.spacing(smDown ? 4 : mdDown? 6 : 10)} display="flex" alignItems="center">
        <Typography variant={smDown? 'h6' : mdDown? 'h5' : 'h4'} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" component="h1">
          {titulo}  
        </Typography>
        
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
      </Box>
      
      {barraDeFerramentas && (
        <Box>
          {barraDeFerramentas}
        </Box>
      )}

      <Box padding={1} flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};