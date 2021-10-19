import {
  ChakraProvider,
  Box,
  CSSReset,
  extendTheme,
  Flex,
} from '@chakra-ui/react';

import { Potions } from './components/Potions';
import { Potion } from './components/Potion';
import { Results } from './components/Results';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box
        maxWidth={appWidth}
        mx="auto"
        px={{ base: 4, md: 0 }}
        py={6}
        width="100%"
      >
        <Flex as="main" pt={12}>
          <Potions>
            {['red', 'green', 'gray', 'yellow', 'blue'].map((color, i) => {
              return <Potion key={i} color={color} />;
            })}
          </Potions>
          <Results />
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

const appWidth = 1024;

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
});
