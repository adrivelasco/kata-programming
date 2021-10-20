import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Potion } from '../types';

const initialState: Potion[] = [];

const userPotionsSlice = createSlice({
  name: 'userPotions',
  initialState,
  reducers: {
    addPotion: (state, { payload: potion }: PayloadAction<Potion>) => {
      const index = state.findIndex(({ color }) => color === potion.color);

      if (index === -1) {
        state.push(potion);
      } else {
        state[index].quantity++;
      }
    },
    deletePotion: (state, { payload: potion }: PayloadAction<Potion>) => {
      const index = state.findIndex(({ color }) => color === potion.color);

      if (index === -1) return;

      if (state[index].quantity > 1) {
        state[index].quantity--;
      } else {
        state.splice(index, 1);
      }
    },
  },
});

export const { addPotion, deletePotion } = userPotionsSlice.actions;

export const { reducer: userPotionsReducer } = userPotionsSlice;
