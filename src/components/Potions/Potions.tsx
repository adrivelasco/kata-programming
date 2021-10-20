import { Box, Divider, Flex, FlexProps, Text } from '@chakra-ui/react';

export const Potions = ({ children, ...props }: FlexProps) => (
  <Flex {...props} flexDirection="column">
    <Box py={4}>
      <Text fontWeight="medium" fontSize="large">
        Choose your Potions:
      </Text>
      <Divider mt={4} />
    </Box>
    {children}
  </Flex>
);
