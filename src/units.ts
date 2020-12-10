export const units: Partial<{ [unit: string]: { fractional?: true; withoutSpace?: true; capitalizable?: true } }> = {
  cup: { fractional: true },
  cups: { fractional: true },
  c: { fractional: true },
  'c.': { fractional: true },
  g: { withoutSpace: true },
  grms: {},
  kg: { withoutSpace: true },
  l: { withoutSpace: true },
  lb: {},
  lbs: {},
  liter: {},
  mg: { withoutSpace: true },
  ml: { withoutSpace: true },
  ounce: {},
  ounces: {},
  oz: {},
  pint: {},
  pints: {},
  pound: {},
  pounds: {},
  qt: {},
  t: { fractional: true },
  tablespoon: { fractional: true },
  tablespoons: { fractional: true },
  tbls: {},
  tbs: { capitalizable: true, fractional: true },
  tbsp: { capitalizable: true, fractional: true },
  teaspoon: { fractional: true },
  teaspoons: { fractional: true },
  tsp: { fractional: true },
  bottle: {},
  bottles: {},
};

export const isFractionalUnit = (unit: string) => units[unit]?.fractional === true;

export const isCapitalizableUnit = (unit: string) => units[unit]?.capitalizable === true;

export const isWithoutSpaceUnit = (unit: string) => units[unit]?.withoutSpace === true;
