import { isPresent, isUndefined } from '@whisklabs/typeguards';

import { fractions } from './fractions';
import { dropZeros, getFractions } from './number';
import { isCapitalizableUnit, isFractionalUnit, isWithoutSpaceUnit } from './units';

export const formatQuantity = (quantity: number, unit?: string): string => {
  if (isUndefined(unit) || !isFractionalUnit(unit)) {
    return dropZeros(quantity).toString();
  }

  const fraction = getFractions(quantity);

  if (isUndefined(fraction)) {
    return dropZeros(quantity).toString();
  }

  const [int, num, den] = fraction;

  const showInt = int !== 0;
  const showFraction = num !== 0;

  if (!showInt && !showFraction) {
    return '0';
  }

  return [showInt ? int : undefined, showFraction ? formatFraction(`${num}/${den}`) : undefined]
    .filter(isPresent)
    .join(' ');
};

export const formatUnit = (unit: string): string => {
  if (isCapitalizableUnit(unit)) {
    return `${unit[0].toUpperCase()}${unit.slice(1)}`;
  }

  return unit;
};

export const formatQtyUnit = (item: { quantity?: number; unit?: string }) => {
  if (isPresent(item.quantity) && isPresent(item.unit) && isWithoutSpaceUnit(item.unit)) {
    return `${formatQuantity(item.quantity, item.unit)}${item.unit}`;
  }

  return [
    isPresent(item.quantity) ? formatQuantity(item.quantity, item.unit) : undefined,
    isPresent(item.unit) ? formatUnit(item.unit) : undefined,
  ]
    .filter(isPresent)
    .join(' ');
};

export const formatFraction = (fraction: string) => fractions[fraction] ?? fraction;
