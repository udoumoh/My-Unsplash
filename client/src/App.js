import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import AppContainer from './AppContainer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppContainer />
    </ChakraProvider>
  );
}

export default App;
