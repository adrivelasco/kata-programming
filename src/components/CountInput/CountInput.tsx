import { Input, Button, FlexProps, Flex } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

export interface CountInputProps extends FlexProps {
  value?: number;
}

export const CountInput = ({ value = 0, ...props }: CountInputProps) => {
  return (
    <Flex position="relative" as="form" {...props}>
      <Button>
        <MinusIcon />
      </Button>
      <Input
        bg="gray.700"
        fontWeight="bold"
        mx={2}
        readOnly={true}
        textAlign="center"
        type="number"
        value={value}
      />
      <Button>
        <AddIcon />
      </Button>
    </Flex>
  );
};
