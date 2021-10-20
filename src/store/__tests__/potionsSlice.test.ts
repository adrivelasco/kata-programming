import { AnyAction } from 'redux';
import { PotionColor } from '../../types';
import { potionsReducer, increment, decrease } from '../potionsSlice';

describe('potionsSlice', () => {
  it('should return the initial state', () => {
    const initialState = potionsReducer(undefined, {} as AnyAction);

    expect(initialState).toHaveLength(5);
  });

  it('should increment quantity', () => {
    const nextStatae = potionsReducer(
      [
        {
          color: PotionColor.RED,
          quantity: 3,
        },
      ],
      increment(0),
    );

    expect(nextStatae[0].quantity).toBe(4);
  });

  it('should decrease quantity', () => {
    const nextStatae = potionsReducer(
      [
        {
          color: PotionColor.RED,
          quantity: 5,
        },
      ],
      decrease(0),
    );

    expect(nextStatae[0].quantity).toBe(4);
  });

  it("should not decrease quantity if it isn't > 0", () => {
    const nextState = potionsReducer(
      [
        {
          color: PotionColor.RED,
          quantity: 0,
        },
      ],
      decrease(0),
    );

    expect(nextState[0].quantity).toBe(0);
  });
});
