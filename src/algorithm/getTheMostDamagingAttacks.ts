import { Attack, Recipes, Potion, MostDamagingAttack } from '../types';

export const getDamageByPotionsQty = (potionsQty: number) => {
  return potionsQty in Recipes ? Recipes[potionsQty] : 0;
};

export const getTotalDamage = (attacks: Attack[]) => {
  return attacks.reduce((acc, curr) => acc + curr.damagePct, 0);
};

export const getOptimalAttacks = (
  potions: Potion[],
  attacks: Attack[] = [],
): Attack[] => {
  // return attacks when running out of remaining potions
  if (potions.length === 0) {
    return attacks;
  }

  // create an array of arrays of potential optimal attacks by recursion
  const results: Attack[][] = potions.map((_, i) => {
    const limitOfPotionsThatCanBeMixed = Object.keys(Recipes).length; // we cannot mix more potions than what recipes actually allows
    const currPotionsLength = potions.length - i; // iterates from end to start

    const attack = {
      potions: [],
      damagePct: 0,
    } as Attack;

    // the following reduce will combine potions and track those which are mixed/used in the Attack object under the hood
    // and at the end it will return an array of remaining potions to continue looking for optimal attacks
    const remainingPotions = potions.reduce<Potion[]>((acc, curr, i) => {
      const potion = { ...curr };

      if (i < currPotionsLength && i < limitOfPotionsThatCanBeMixed) {
        attack.potions = [...attack.potions, { ...potion, quantity: 1 }];

        attack.damagePct = getDamageByPotionsQty(attack.potions.length);

        potion.quantity--;
      }

      if (potion.quantity > 0) {
        acc.push(potion);
      }

      return acc;
    }, []);

    return getOptimalAttacks(remainingPotions, attacks.concat(attack));
  });

  const optimalAttacks = results.reduce((acc, curr) => {
    return getTotalDamage(acc) < getTotalDamage(curr) ? curr : acc;
  }, []);

  return optimalAttacks;
};

export const getTheMostDamagingAttacks = (
  potions: Potion[],
): MostDamagingAttack => {
  const optimalAttacks = getOptimalAttacks(potions);
  const totalDamagePct = getTotalDamage(optimalAttacks);

  return {
    totalDamagePct,
    attacks: optimalAttacks,
  };
};
