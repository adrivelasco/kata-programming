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

  return (
    <Flex as="main" pt={12} {...props}>
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
        onCalculateResults={onCalculateResults}
        onClear={onClear}
        data={results}
      />
    </Flex>
  );
};
