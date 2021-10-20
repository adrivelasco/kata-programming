import { ChakraProvider, Box, CSSReset, extendTheme } from '@chakra-ui/react';

import { PotionCalculator } from './components/PotionCalculator';

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
        <PotionCalculator />
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
