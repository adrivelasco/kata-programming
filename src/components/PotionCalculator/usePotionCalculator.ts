import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment, decrease, RootState } from '../../store';

export const usePotionCalculator = () => {
  const dispatch = useDispatch();
  const potions = useSelector((state: RootState) => state.potions);

  // event handlers
  const handleOnIncrement = useCallback(
    (index: number) => () => {
      dispatch(increment(index));
    },
    [dispatch],
  );

  const handleOnDecrement = useCallback(
    (index: number) => () => {
      dispatch(decrease(index));
    },
    [dispatch],
  );

  return {
    potions,
    onIncrement: handleOnIncrement,
    onDecrement: handleOnDecrement,
  };
};
