import { RootState } from './store';

export const getPotionsState = (state: RootState) => state.potions;

export const getResultsState = (state: RootState) => state.results;
