import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getTheMostDamagingAttacks } from '../algorithm';
import { MostDamagingAttack, Potion } from '../types';

const initialState: MostDamagingAttack = getTheMostDamagingAttacks([]);

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    calculate: (_, { payload: potions }: PayloadAction<Potion[]>) => {
      const mostDamagingAttacks = getTheMostDamagingAttacks(potions);

      return mostDamagingAttacks;
    },
    clear: () => {
      return initialState;
    },
  },
});

export const { calculate, clear } = resultsSlice.actions;

export const { reducer: resultsReducer } = resultsSlice;
