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
      <PotionIcon boxSize="10" color={getIconColor(color)} />
    </Flex>
    <CountInput color={color} />
  </Flex>
);

const getIconColor = (color: string) => concat(color, '.100');
const getBgColor = (color: string) => concat(color, '.500');
const getBorderColor = (color: string) => concat(color, '.700');
