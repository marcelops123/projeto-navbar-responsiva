import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components/Pages/FirstPage';
import { UseMediaNavBar } from './components/useMediaQuery';
import Rotas from './Routes';
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <Rotas/>
    </ChakraProvider>
    

  </React.StrictMode>,
  document.getElementById('root')
);

