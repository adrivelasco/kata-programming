import { useDispatch, useSelector } from 'react-redux';
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
import { addPotion, deletePotion, RootState } from './store';
import { PotionColor } from './types';
import { useCallback } from 'react';

export const App = () => {
  const userPotions = useSelector((state: RootState) => state.userPotions);
  const dispatch = useDispatch();

  const handleOnIncrement = useCallback(
    (color: PotionColor) => () => {
      dispatch(
        addPotion({
          color,
          quantity: 1,
        }),
      );
    },
    [dispatch],
  );

  const handleOnDecrement = useCallback(
    (color: PotionColor) => () => {
      dispatch(
        deletePotion({
          color,
          quantity: 1,
        }),
      );
    },
    [dispatch],
  );

  const getPotionQuantity = (color: string) => {
    const potion = userPotions.find((potion) => potion.color === color);
    return potion ? potion.quantity : 0;
  };

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
            {[
              PotionColor.RED,
              PotionColor.GREEN,
              PotionColor.GRAY,
              PotionColor.YELLOW,
              PotionColor.BLUE,
            ].map((color: PotionColor, i) => {
              return (
                <Potion
                  color={color}
                  key={i}
                  onDecrease={handleOnDecrement(color)}
                  onIncrement={handleOnIncrement(color)}
                  value={getPotionQuantity(color)}
                />
              );
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
