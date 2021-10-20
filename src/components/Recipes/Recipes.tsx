import { Box, BoxProps, Text, UnorderedList, ListItem } from '@chakra-ui/react';

export const Recipes = (props: BoxProps) => (
  <Box {...props} color="whiteAlpha.600" py={6}>
    <Text fontWeight="medium" fontSize="small">
      Recipes:
    </Text>
    <Text fontWeight="light" fontSize="small" mt={1}>
      By mixing different types of potions you can do more damage to your
      target, the different mixes and percentage of damage you can do are the
      following:
    </Text>
    <UnorderedList fontWeight="light" fontSize="small" mt={1}>
      {items.map((text) => (
        <ListItem>{text}</ListItem>
      ))}
    </UnorderedList>
  </Box>
);

const items = [
  'A potion deals 3% damage.',
  'Two different potions deal 5% damage.',
  'Three different potions deal 10% damage.',
  'Four different potions deal 20% damage.',
  'Five different potions deal 25% damage.',
];
