export const Recipes: { [key: string]: number } = {
  1: 3,
  2: 5,
  3: 10,
  4: 20,
  5: 25,
};

export enum PotionColor {
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
  YELLOW = 'yellow',
  GRAY = 'gray',
}

export type Potion = {
  color: PotionColor;
  quantity: number;
};

export type Attack = {
  potions: Potion[];
  damagePct: number;
};

export type MostDamagingAttack = {
  totalDamagePct: number;
  attacks: Attack[];
};
