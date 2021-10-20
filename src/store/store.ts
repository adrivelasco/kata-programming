import { configureStore } from '@reduxjs/toolkit';

import { resultsReducer } from './resultsSlice';
import { potionsReducer } from './potionsSlice';

export const store = configureStore({
  reducer: {
    potions: potionsReducer,
    results: resultsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
