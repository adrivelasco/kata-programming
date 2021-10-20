import { AnyAction } from 'redux';

import { PotionColor } from '../../types';
import { resultsReducer, clear, calculate } from '../resultsSlice';

describe('potionsSlice', () => {
  it('should return the initial state', () => {
    const initialState = resultsReducer(undefined, {} as AnyAction);

    expect(initialState).toMatchObject({
      totalDamagePct: 0,
      attacks: [],
    });
  });

  it('should calculate results', () => {
    const nextState = resultsReducer(
      undefined,
      calculate([
        {
          color: PotionColor.RED,
          quantity: 2,
        },
      ]),
    );

    expect(nextState).toMatchObject({
      totalDamagePct: 6,
      attacks: [
        {
          damagePct: 3,
          potions: [{ color: PotionColor.RED, quantity: 1 }],
        },
        {
          damagePct: 3,
          potions: [{ color: PotionColor.RED, quantity: 1 }],
        },
      ],
    });
  });

  it('should clear results', () => {
    const nextState = resultsReducer(
      {
        totalDamagePct: 3,
        attacks: [
          {
            damagePct: 3,
            potions: [
              {
                color: PotionColor.RED,
                quantity: 1,
              },
            ],
          },
        ],
      },
      clear(),
    );

    expect(nextState).toMatchObject({
      totalDamagePct: 0,
      attacks: [],
    });
  });
});
