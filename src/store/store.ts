import { configureStore } from '@reduxjs/toolkit';

import { potionsReducer } from './potionsSlice';

export const store = configureStore({
  reducer: {
    potions: potionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
