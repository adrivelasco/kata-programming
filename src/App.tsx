import { ChakraProvider, Button } from '@chakra-ui/react';

export const App = () => {
  return (
    <ChakraProvider>
      Hello
      <Button>World</Button>
    </ChakraProvider>
  );
};
