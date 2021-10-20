import {
  Box,
  BoxProps,
  Button,
  Divider,
  Flex,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

import { MostDamagingAttack } from '../../types';

export interface ResultsProps extends BoxProps {
  onClear?: () => void;
  onCalculateResults?: () => void;
  data?: MostDamagingAttack;
  enableCalculate?: boolean;
}

export const Results = ({
  children,
  data,
  onCalculateResults,
  onClear,
  enableCalculate,
  ...props
}: ResultsProps) => (
  <Flex
    bg="gray.900"
    borderRadius="round"
    flex={1}
    flexDirection="column"
    px={{ base: 6, md: 8 }}
    py={{ base: 6, md: 8 }}
    rounded="md"
    {...props}
  >
    <Box flex={1} mb={{ base: 6, md: 8 }}>
      {children}
      <Text fontSize="large" fontWeight="bold" mb={2}>
        The Most Damaging Attacks
      </Text>
      {!data || data.attacks.length === 0 ? (
        <Text fontWeight="light">
          Click on "Get Optimal Attacks" to see the most damaging combinations
          based on your number of potions.
        </Text>
      ) : (
        <Box>
          <Text fontWeight="medium" textDecoration="underline" mb={1}>
            Combination:
          </Text>
          <UnorderedList>
            {data.attacks.map(({ potions, damagePct }, i) => (
              <ListItem key={i} fontWeight="light">
                <strong>Attack {i + 1}:</strong> Using {potions.length} potions
                deals {damagePct}% damage
              </ListItem>
            ))}
          </UnorderedList>
          <Text fontWeight="medium" mt={2}>
            Total Damage: <strong>{data.totalDamagePct}</strong>
          </Text>
        </Box>
      )}
    </Box>
    <Divider />
    <Flex
      alignItems="center"
      justifyContent="center"
      mr={5}
      py={{ base: 6, md: 8 }}
    >
      <Button
        colorScheme="green"
        mr={2}
        onClick={onCalculateResults}
        variant="outline"
        disabled={!enableCalculate}
      >
        Calculate
      </Button>
      <Button variant="outline" onClick={onClear}>
        Clear
      </Button>
    </Flex>
  </Flex>
);
