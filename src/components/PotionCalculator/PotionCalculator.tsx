import { Flex, FlexProps } from '@chakra-ui/react';

import { Potion } from '../Potion';
import { Potions } from '../Potions';
import { Results } from '../Results';
import { usePotionCalculator } from './usePotionCalculator';

export const PotionCalculator = (props: FlexProps) => {
  const {
    onCalculateResults,
    onClear,
    onDecrement,
    onIncrement,
    potions,
    results,
  } = usePotionCalculator();

  const enableCalculate = potions.some(({ quantity }) => quantity > 0);

  return (
    <Flex
      alignItems={{ base: 'center', md: 'normal' }}
      as="main"
      flexDirection={{ base: 'column', md: 'row' }}
      pt={{ base: 0, md: 12 }}
      {...props}
    >
      <Potions>
        {potions.map(({ color, quantity }, i) => {
          return (
            <Potion
              color={color}
              key={color}
              onDecrease={onDecrement(i)}
              onIncrement={onIncrement(i)}
              value={quantity}
            />
          );
        })}
      </Potions>
      <Results
        data={results}
        enableCalculate={enableCalculate}
        ml={{ base: 0, md: 8 }}
        mt={{ base: 8, md: 0 }}
        onCalculateResults={onCalculateResults}
        onClear={onClear}
      />
    </Flex>
  );
};
