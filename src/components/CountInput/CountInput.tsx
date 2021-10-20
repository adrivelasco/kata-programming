import { concat } from 'ramda';
import { Box, Button, Input, FlexProps, Flex } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

export interface CountInputProps extends FlexProps {
  value?: number;
  color: string;
  onIncrement?: () => void;
  onDecrease?: () => void;
}

export const CountInput = ({
  value = 0,
  color,
  onIncrement,
  onDecrease,
  ...props
}: CountInputProps) => {
  return (
    <Box positino="relative" {...props}>
      <Box
        bg={getBgLine(color)}
        borderBottom="1px solid"
        borderColor={getBgBorderLine(color)}
        height={1}
        mb={2}
        rounded="md"
        transition="width 200ms ease"
        width={getWidthLine(value)}
      />
      <Flex position="relative" maxWidth="100%">
        <Button
          size="sm"
          variant="outline"
          onClick={onDecrease}
          disabled={value === 0}
        >
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
        <Button size="sm" variant="outline" onClick={onIncrement}>
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
  return value <= 5 ? `${value * 20}%` : '100%';
};
