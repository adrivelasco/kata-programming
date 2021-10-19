import { ChakraProvider, Box, CSSReset, extendTheme } from '@chakra-ui/react';

import { Potions } from './components/Potions';
import { Potion } from './components/Potion';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box
        width="100%"
        maxWidth={appWidth}
        mx="auto"
        py={6}
        px={{ base: 4, md: 0 }}
      >
        <Box as="main">
          <Potions>
            {['red', 'green', 'gray', 'yellow', 'blue'].map((color, i) => {
              return <Potion key={i} color={color} />;
            })}
          </Potions>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

const appWidth = 1024;

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  styles: {
    global: {
      body: {
        // bg: "gray.100",
      },
    },
  },
});
