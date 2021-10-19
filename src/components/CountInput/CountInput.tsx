import { concat } from 'ramda';
import { Box, Button, Input, FlexProps, Flex } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

export interface CountInputProps extends FlexProps {
  value?: number;
  color: string;
}

export const CountInput = ({ value = 0, color, ...props }: CountInputProps) => {
  return (
    <Box positino="relative" {...props}>
      <Box
        bg={getBgLine(color)}
        height={1}
        borderBottom="1px solid"
        borderColor={getBgBorderLine(color)}
        mb={2}
        rounded="md"
        width={getWidthLine(value)}
      />
      <Flex position="relative" as="form" maxWidth="100%">
        <Button size="sm" variant="outline">
          <MinusIcon />
        </Button>
        <Input
          fontWeight="bold"
          maxWidth={120}
          mx={2}
          readOnly={true}
          size="sm"
          textAlign="center"
          type="number"
          value={value}
        />
        <Button size="sm" variant="outline">
          <AddIcon />
        </Button>
      </Flex>
    </Box>
  );
};

const getBgLine = (color: string) => concat(color, '.500');
const getBgBorderLine = (color: string) => concat(color, '.300');

const getWidthLine = (value: number) => {
  if (value === 0) {
    return '5%';
  }
  return value <= 10 ? `${value * 10}%` : '100%';
};
