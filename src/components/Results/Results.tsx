import { Box, BoxProps, Button, Divider, Flex, Text } from '@chakra-ui/react';

export const Results = ({ children, ...props }: BoxProps) => (
  <Flex
    bg="gray.900"
    borderRadius="round"
    flex={1}
    flexDirection="column"
    ml={{ base: 0, md: 8 }}
    {...props}
    px={8}
    py={8}
    rounded="md"
    {...props}
  >
    <Box flex={1}>
      {children}
      <Text fontSize="large" fontWeight="bold">
        The Most Damaging Attacks:
      </Text>
      <Text fontWeight="light" mt={2}>
        Click on "Get Optimal Attacks" to see the most damaging combinations
        based on your number of potions.
      </Text>
    </Box>
    <Divider />
    <Flex alignItems="center" justifyContent="center" mr={5} py={8}>
      <Button variant="outline" mr={2} colorScheme="green">
        Get Optimal Attacks
      </Button>
      <Button variant="outline">Clear</Button>
    </Flex>
  </Flex>
);
