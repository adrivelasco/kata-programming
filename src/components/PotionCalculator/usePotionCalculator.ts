import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  increment,
  decrease,
  calculate,
  clear,
  getPotionsState,
  getResultsState,
} from '../../store';

export const usePotionCalculator = () => {
  const potions = useSelector(getPotionsState);
  const results = useSelector(getResultsState);

  const dispatch = useDispatch();

  // event handlers
  const handleOnClearResults = useCallback(() => {
    dispatch(clear());
  }, [dispatch]);

  const handleOnCalculateResults = useCallback(() => {
    const input = potions.filter(({ quantity }) => quantity > 0);

    if (input.length > 0) {
      dispatch(calculate(input));
    }
  }, [dispatch, potions]);

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
    clear,
    onCalculateResults: handleOnCalculateResults,
    onClear: handleOnClearResults,
    onDecrement: handleOnDecrement,
    onIncrement: handleOnIncrement,
    potions,
    results,
  };
};
