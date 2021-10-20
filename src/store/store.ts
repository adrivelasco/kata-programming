import { configureStore } from '@reduxjs/toolkit';

import { userPotionsReducer } from './userPotionsSlice';

export const store = configureStore({
  reducer: {
    userPotions: userPotionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
