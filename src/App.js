import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import WithSubnavigation from './components/Navbar'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <WithSubnavigation />
    </ChakraProvider>
  );
}

export default App;
