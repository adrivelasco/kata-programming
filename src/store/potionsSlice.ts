import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Potion, PotionColor } from '../types';

const initialState: Potion[] = [
  {
    color: PotionColor.RED,
    quantity: 0,
  },
  {
    color: PotionColor.GREEN,
    quantity: 0,
  },
  {
    color: PotionColor.GRAY,
    quantity: 0,
  },
  {
    color: PotionColor.YELLOW,
    quantity: 0,
  },
  {
    color: PotionColor.BLUE,
    quantity: 0,
  },
];

const potionsSlice = createSlice({
  name: 'userPotions',
  initialState,
  reducers: {
    increment: (state, { payload: index }: PayloadAction<number>) => {
      state[index].quantity++;
    },
    decrease: (state, { payload: index }: PayloadAction<number>) => {
      if (state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { increment, decrease } = potionsSlice.actions;

export const { reducer: potionsReducer } = potionsSlice;
