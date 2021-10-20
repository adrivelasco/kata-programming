import { PotionColor } from '../../types';
import {
  getOptimalAttacks,
  getTheMostDamagingAttacks,
  getTotalDamage,
} from '../getTheMostDamagingAttacks';

describe('getTheMostDamagingAttacks', () => {
  it('returns an empty array of attacks', () => {
    const result = getTheMostDamagingAttacks([]);

    expect(result).toMatchObject({
      totalDamagePct: 0,
      attacks: [],
    });
  });

  it('returns a valid result', () => {
    const result = getTheMostDamagingAttacks([
      { color: PotionColor.RED, quantity: 1 },
      { color: PotionColor.BLUE, quantity: 1 },
    ]);

    expect(result).toMatchObject({
      totalDamagePct: 6,
      attacks: [
        {
          damagePct: 3,
          potions: [{ color: PotionColor.RED, quantity: 1 }],
        },
        {
          damagePct: 3,
          potions: [{ color: PotionColor.BLUE, quantity: 1 }],
        },
      ],
    });
  });
});

describe('getTotalDamage', () => {
  it('returns 0 when receives empty attacks', () => {
    const total = getTotalDamage([]);

    expect(total).toBe(0);
  });

  it('returns a valid total damage', () => {
    const total = getTotalDamage([
      {
        damagePct: 25,
        potions: [
          { color: PotionColor.RED, quantity: 1 },
          { color: PotionColor.BLUE, quantity: 1 },
          { color: PotionColor.GREEN, quantity: 1 },
          { color: PotionColor.YELLOW, quantity: 1 },
          { color: PotionColor.GRAY, quantity: 1 },
        ],
      },
      {
        damagePct: 3,
        potions: [{ color: PotionColor.BLUE, quantity: 1 }],
      },
    ]);

    expect(total).toBe(28);
  });
});

describe('getOptimalAttacks', () => {
  it('returns an empty array', () => {
    const result = getOptimalAttacks([]);

    expect(result.length).toBe(0);
  });

  it('returns attacks when empty potions array', () => {
    const result = getOptimalAttacks(
      [],
      [
        {
          damagePct: 3,
          potions: [{ color: PotionColor.GREEN, quantity: 1 }],
        },
      ],
    );

    expect(result).toMatchObject([
      {
        damagePct: 3,
        potions: [{ color: PotionColor.GREEN, quantity: 1 }],
      },
    ]);
  });

  it('returns optimal attacks based on input and recipes', () => {
    const result = getOptimalAttacks([
      { color: PotionColor.RED, quantity: 2 },
      { color: PotionColor.BLUE, quantity: 2 },
      { color: PotionColor.GREEN, quantity: 1 },
      { color: PotionColor.YELLOW, quantity: 1 },
      { color: PotionColor.GRAY, quantity: 1 },
    ]);

    expect(result).toMatchObject([
      {
        damagePct: 25,
        potions: [
          { color: PotionColor.RED, quantity: 1 },
          { color: PotionColor.BLUE, quantity: 1 },
          { color: PotionColor.GREEN, quantity: 1 },
          { color: PotionColor.YELLOW, quantity: 1 },
          { color: PotionColor.GRAY, quantity: 1 },
        ],
      },
      {
        damagePct: 3,
        potions: [{ color: PotionColor.RED, quantity: 1 }],
      },
      {
        damagePct: 3,
        potions: [{ color: PotionColor.BLUE, quantity: 1 }],
      },
    ]);
  });

  it('returns optimal attacks based on remaining potions and attacks', () => {
    const result = getOptimalAttacks(
      [
        { color: PotionColor.GREEN, quantity: 1 },
        { color: PotionColor.YELLOW, quantity: 1 },
      ],
      [
        {
          damagePct: 10,
          potions: [
            { color: PotionColor.GREEN, quantity: 1 },
            { color: PotionColor.YELLOW, quantity: 1 },
            { color: PotionColor.RED, quantity: 1 },
          ],
        },
      ],
    );

    expect(result).toMatchObject([
      {
        damagePct: 10,
        potions: [
          { color: PotionColor.GREEN, quantity: 1 },
          { color: PotionColor.YELLOW, quantity: 1 },
          { color: PotionColor.RED, quantity: 1 },
        ],
      },
      {
        damagePct: 3,
        potions: [{ color: PotionColor.GREEN, quantity: 1 }],
      },
      {
        damagePct: 3,
        potions: [{ color: PotionColor.YELLOW, quantity: 1 }],
      },
    ]);
  });
});
