import { createSlice } from '@reduxjs/toolkit';

import { Potion } from '../types';

const initialState: Potion[] = [];

const userPotionsSlice = createSlice({
  name: 'userPotions',
  initialState,
  reducers: {},
});

export const { reducer: userPotionsReducer } = userPotionsSlice;
