import { Icon, IconProps } from '@chakra-ui/react';
import { MdInvertColors } from 'react-icons/md';

export const PotionIcon = (props: IconProps) => (
  <Icon as={MdInvertColors} {...props} />
);
