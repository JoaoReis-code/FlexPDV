import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerContextData {
    isDrawerOpen: boolean;
    drawerOptions: IDrawerOptions[];
    toggleDrawerOpen: () => void;
    setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
}

interface IAppThemeProviderProps {
    children: React.ReactNode
}

interface IDrawerOptions{
    icon: string;
    label: string;
    path: string; 
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);   
  
  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOption = useCallback((newDrawerOptions: IDrawerOptions[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOption }}>
      {children}
    </DrawerContext.Provider>
  );
};