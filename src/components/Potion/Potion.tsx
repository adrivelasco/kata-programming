import { concat } from 'ramda';
import { Flex, FlexProps } from '@chakra-ui/react';
import { CountInput } from '../CountInput';
import { PotionIcon } from '../Icon';

export interface PotionProps extends FlexProps {
  color: string;
}

export const Potion = ({ color, ...props }: PotionProps) => (
  <Flex position="relative" py={3} alignItems="center" {...props}>
    <Flex
      alignItems="center"
      bg={getBgColor(color)}
      border="4px solid"
      borderColor={getBorderColor(color)}
      borderRadius="full"
      boxSize={75}
      justifyContent="center"
      mr={6}
    >
      <PotionIcon boxSize={35} color="white" />
    </Flex>
    <CountInput color={color} />
  </Flex>
);

const getBgColor = (color: string) => concat(color, '.400');
const getBorderColor = (color: string) => concat(color, '.500');
